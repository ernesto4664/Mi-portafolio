import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Configurar Nodemailer para enviar correos
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Se toma de las variables de entorno
        pass: process.env.GMAIL_PASS, // Se toma de las variables de entorno
      },
    });

    try {
      // Configurar el contenido del correo
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: 'ernesto4664@gmail.com', // Aquí va el correo donde quieres recibir los mensajes
        subject: `Nuevo mensaje de ${name}`,
        html: `
          <h1>Nuevo mensaje de Mi portafolio</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo electrónico:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
      });

      return res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
      console.error('Error enviando correo:', error);
      return res.status(500).json({ message: 'Error enviando el correo' });
    }
  }

  return res.status(405).json({ message: 'Método no permitido' });
}
