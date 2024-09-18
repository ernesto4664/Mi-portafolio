"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import UserLayout from '../../components/UserLayout';
import { useState } from 'react';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar el envío
  const [submitMessage, setSubmitMessage] = useState<string | null>(null); // Estado para mostrar mensajes de éxito/error

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage('Mensaje enviado correctamente.');
      } else {
        setSubmitMessage('Error enviando el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Hubo un error enviando el mensaje.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <UserLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Contáctame</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre
              </label>
              <input
                {...register("name", { required: "El nombre es obligatorio" })}
                placeholder="Nombre"
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Correo Electrónico
              </label>
              <input
                {...register("email", { required: "El correo electrónico es obligatorio" })}
                placeholder="Correo Electrónico"
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mensaje
              </label>
              <textarea
                {...register("message", { required: "El mensaje es obligatorio" })}
                placeholder="Mensaje"
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-md shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>

          {submitMessage && <p className="mt-4 text-center text-lg text-blue-500">{submitMessage}</p>}
        </div>
      </div>
    </UserLayout>
  );
}
