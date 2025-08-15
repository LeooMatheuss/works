import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Mensagem enviada com sucesso!');
      setFormData({ nome: '', email: '', mensagem: '' }); // Limpar o formulário após envio
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Entre em Contato</h2>

      <input
        type="text"
        placeholder="Nome"
        required
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <input
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <textarea
        placeholder="Mensagem"
        required
        value={formData.mensagem}
        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
        rows="4"
        className="p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        type="submit"
        className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Enviar
      </button>
    </form>
  );
}
