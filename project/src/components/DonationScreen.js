import React, { useState } from 'react';
import { Heart, DollarSign, CreditCard, Banknote } from 'lucide-react'; // Iconos para la donación

const DonationScreen = ({ onNavigate }) => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const predefinedAmounts = [5, 10, 25, 50]; // Cantidades predefinidas en USD o moneda local

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setCustomAmount(''); // Limpiar monto personalizado si se elige uno predefinido
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(''); // Limpiar monto predefinido si se elige personalizado
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = amount || customAmount;

    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      alert('Por favor, ingresa un monto válido para la donación.');
      return;
    }
    if (!paymentMethod) {
      alert('Por favor, selecciona un método de pago.');
      return;
    }

    // Aquí iría la lógica real de procesamiento de pago.
    // En un entorno real, esto redirigiría a una pasarela de pago segura (Stripe, PayPal, etc.)
    console.log(`Donación de ${finalAmount} ${paymentMethod} procesada.`);
    setIsSubmitted(true);
    setAmount('');
    setCustomAmount('');
    setPaymentMethod('');
    
    setTimeout(() => {
      setIsSubmitted(false);
      alert(`¡Gracias por tu generosa donación de $${finalAmount}! Tu ayuda es invaluable para Hogar Animal.`);
      onNavigate('inicio'); // Redirigir al inicio o a una página de agradecimiento
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-6">
      <h1 className="text-5xl font-bold text-center text-pink-800 mb-12 font-serif">
        Haz una Donación
      </h1>
      <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12">
        Cada contribución, grande o pequeña, nos ayuda a seguir rescatando y cuidando animales.
      </p>

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {isSubmitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">¡Donación en proceso!</strong>
            <span className="block sm:inline"> Redirigiendo a la pasarela de pago...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <DollarSign className="mr-2 text-pink-600" />
              Monto de la Donación
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {predefinedAmounts.map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val.toString())}
                  className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-200 
                    ${amount === val.toString() ? 'bg-pink-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  ${val}
                </button>
              ))}
            </div>
            <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">O ingresa un monto personalizado:</label>
            <input
              type="number"
              id="customAmount"
              name="customAmount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Ej. 75"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              min="1"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <CreditCard className="mr-2 text-pink-600" />
              Método de Pago
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handlePaymentMethodChange('Tarjeta de Crédito/Débito')}
                className={`flex items-center justify-center px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 
                  ${paymentMethod === 'Tarjeta de Crédito/Débito' ? 'bg-pink-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                <CreditCard className="mr-2" /> Tarjeta
              </button>
              <button
                type="button"
                onClick={() => handlePaymentMethodChange('PayPal')}
                className={`flex items-center justify-center px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 
                  ${paymentMethod === 'PayPal' ? 'bg-pink-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                <Banknote className="mr-2" /> PayPal
              </button>
              {/* Podrías añadir más opciones como transferencia bancaria, etc. */}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Heart size={24} />
            <span>Donar Ahora</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationScreen;