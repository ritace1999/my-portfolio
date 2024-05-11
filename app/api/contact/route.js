import { createTransport } from "nodemailer";
export async function POST(Request) {
  try {
    const { fullName, email, subject, message } = await Request.json();
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
    const mailOptions = {
      from: email,
      to: process.env.USER,
      subject: subject,
      text: `
      Name: ${fullName}
      Email: ${email}
      Message: ${message}
    `,
    };
    transporter.sendMail(mailOptions);
    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    return new Response.json(
      { status: 500 },
      {
        message: "Unable to send message at this moment",
      }
    );
  }
}
