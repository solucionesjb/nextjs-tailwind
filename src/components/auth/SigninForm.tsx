'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string>('');

    const handleSubmit = async (formData: FormData) => {
        setError('');

        const result = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false, // Evita la redirección automática, se maneja manualmente
        });

        if (result.error) {
            setError(result.error);
        } else {
            // Redirige al usuario a la página deseada tras un inicio de sesión exitoso
            redirect('/')
        }
    };

    return (
        <form action={handleSubmit}
            className="max-w-md mx-auto p-4 bg-white rounded shadow">
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Log In
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}
