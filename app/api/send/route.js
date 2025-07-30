// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;
// export async function POST(req, res) {
//   const{body} = await req.json();
//   const{email, subject, message} = body
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ['mahmoudsruby@gmail.com',email],
//       subject: 'Hello world',
//       react: 
//       <>
//       <h1>{subject}</h1>
//       <p>Thank you for contacting us!</p>
//       <p>New Message Submitted!</p>
//       <p>{message}</p>
//       </>
//     //   EmailTemplate({ firstName: 'John' }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }






import { Resend } from 'resend';

const fromEmail = process.env.FROM_EMAIL;

/**
 * Handles POST requests to send emails using Resend.
 * This function signature is for Next.js App Router API Routes.
 * @param {Request} req The incoming request object.
 * @returns {Response} A JSON response indicating success or error.
 */
export async function POST(req) {

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return Response.json(
        { error: 'Server configuration error: Resend API Key is missing.' },
        { status: 500 }
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);


    const body = await req.json();
    console.log('Request body received:', body);

    if (!body || typeof body !== 'object') {
      console.error('Request body is empty or not a valid object:', body);
      return Response.json(
        { error: 'Invalid request body. Expected JSON object.' },
        { status: 400 } 
      );
    }

    const { email,subject, message } = body;

    if (!email  || !subject || !message) {
      console.warn('Missing required fields in request body. Email:', email, 'Subject:', subject, 'Message:', message);
      return Response.json(
        { error: 'Missing required fields: email, subject, or message.' },
        { status: 400 } 
      );
    }

    if (!fromEmail) {
      console.error('FROM_EMAIL is not defined in environment variables or is empty.');
      return Response.json(
        { error: 'Server configuration error: Sender email (FROM_EMAIL) is missing.' },
        { status: 500 }
      );
    }
    if (!fromEmail.includes('<') || !fromEmail.includes('>')) {
        console.warn('FROM_EMAIL format might be incorrect. Expected "Name <email@domain.com>". Current:', fromEmail);
    }



    const { data, error } = await resend.emails.send({
      from: fromEmail, 
      to: ['bly38839@gmail.com', email], 
      subject: subject, 
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New Message Submitted from: {email}</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      console.error('Resend API returned an error:', error);
      return Response.json({ error: error.message || JSON.stringify(error) || 'Failed to send email via Resend' }, { status: 500 });
    }


    if (!data) {
        console.error('Resend returned success but data object was empty/null.');
        return Response.json({ message: 'Email sent, but no data returned from Resend.' }, { status: 200 });
    }

    return Response.json(data, { status: 200 });

  } catch (error) {
    console.error('Server-side processing error (caught by outer try-catch):', error);
    return Response.json({ error: error.message || JSON.stringify(error) || 'Internal Server Error' }, { status: 500 });
  }
}
