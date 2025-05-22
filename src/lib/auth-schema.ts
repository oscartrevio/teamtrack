import z from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(50, { message: 'El nombre no puede exceder los 50 caracteres' }),

  firstName: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(50, { message: 'El nombre no puede exceder los 50 caracteres' }),

  lastName: z
    .string()
    .min(2, { message: 'El apellido debe tener al menos 2 caracteres' })
    .max(50, { message: 'El apellido no puede exceder los 50 caracteres' }),

  email: z
    .string()
    .email({ message: 'Por favor ingresa una dirección de correo válida' })
    .min(2)
    .max(50),

  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    .max(50, { message: 'La contraseña no puede exceder los 50 caracteres' }),

  image: z.string().optional(),
});

export const signInFormSchema = formSchema.pick({
  email: true,
  password: true,
});

export const signUpFormSchema = formSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  password: true,
  image: true,
});
