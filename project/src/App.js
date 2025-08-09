import React, { useState, useEffect } from 'react';
import AnimalProfileList from './components/AnimalProfileList';
import AnimalFilter from './components/AnimalFilter';
import HomeScreen from './components/HomeScreen';
import BottomNavigationBar from './components/BottomNavigationBar';
import HappyStoriesScreen from './components/HappyStoriesScreen';
import NotificationsScreen from './components/NotificationsScreen';
import ReportAnimalForm from './components/ReportAnimalForm';
import UserProfileScreen from './components/UserProfileScreen';
import DonationScreen from './components/DonationScreen';
import AdoptionRequestsScreen from './components/AdoptionRequestsScreen';
import ChatScreen from './components/ChatScreen';
import React from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio'); // Estado para la página actual
  const [chatProps, setChatProps] = useState(null); // Estado para pasar props al ChatScreen

  // Datos de ejemplo para los animales
  const allAnimals = [
    {
      id: 1,
      name: "Max",
      type: "Perro",
      breed: "Labrador Mix",
      age: 2,
      gender: "Macho",
      size: "Grande",
      vaccinated: true,
      sterilized: true,
      description: "Max es un perro muy juguetón y enérgico. Le encanta correr en el parque y jugar a la pelota. Es ideal para familias activas con niños.",
      city: "Ciudad de México", // Añadido para el filtro
      images: [ 
        "/images/max1.jpg", 
        "/images/max2.jpg",
        "/images/max3.jpg"
      ]
    },
    {
      id: 2,
      name: "Luna",
      type: "Gato",
      breed: "Siamés",
      age: 1,
      gender: "Hembra",
      size: "Pequeño",
      vaccinated: true,
      sterilized: true,
      description: "Luna es una gata muy cariñosa y tranquila. Le encanta dormir en el regazo y recibir mimos. Perfecta para personas que buscan compañía.",
      city: "Guadalajara", // Añadido para el filtro
      images: [ 
        "/images/luna1.jpg",
        "/images/luna2.jpg"
      ]
    },
    {
      id: 3,
      name: "Rocky",
      type: "Perro",
      breed: "Bulldog Francés",
      age: 3,
      gender: "Macho",
      size: "Mediano",
      vaccinated: true,
      sterilized: false,
      description: "Rocky es un perro con mucha personalidad. Es leal y protector, ideal para un hogar donde sea el centro de atención. Necesita paseos cortos.",
      city: "Monterrey", // Añadido para el filtro
      images: [ 
        "/images/rocky1.jpg",
        "/images/rocky2.jpg",
        "/images/rocky3.jpg",
        "/images/rocky4.jpg"
      ]
    },
    {
      id: 4,
      name: "Mia",
      type: "Gato",
      breed: "Mestiza",
      age: 0.5,
      gender: "Hembra",
      size: "Pequeño",
      vaccinated: false,
      sterilized: false,
      description: "Mia es una cachorrita llena de energía y curiosidad. Está lista para aprender y crecer en un hogar lleno de amor y paciencia.",
      city: "Ciudad de México", // Añadido para el filtro
      images: [ 
        "/images/mia1.jpg"
      ]
    }
  ];

  const [filteredAnimals, setFilteredAnimals] = useState(allAnimals);

  const handleFilterChange = (filters) => {
    let updatedAnimals = [...allAnimals];

    // Filtro por nombre
    if (filters.name) {
      updatedAnimals = updatedAnimals.filter(animal => 
        animal.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.type) {
      updatedAnimals = updatedAnimals.filter(animal => animal.type === filters.type);
    }
    if (filters.gender) {
      updatedAnimals = updatedAnimals.filter(animal => animal.gender === filters.gender);
    }
    if (filters.size) {
      updatedAnimals = updatedAnimals.filter(animal => animal.size === filters.size);
    }
    if (filters.vaccinated !== '') {
      updatedAnimals = updatedAnimals.filter(animal => animal.vaccinated === (filters.vaccinated === 'true'));
    }
    if (filters.sterilized !== '') {
      updatedAnimals = updatedAnimals.filter(animal => animal.sterilized === (filters.sterilized === 'true'));
    }
    // Filtro por raza
    if (filters.breed) {
      updatedAnimals = updatedAnimals.filter(animal => 
        animal.breed.toLowerCase().includes(filters.breed.toLowerCase())
      );
    }
    // Filtro por edad
    if (filters.age) {
      updatedAnimals = updatedAnimals.filter(animal => animal.age <= parseInt(filters.age));
    }
    // Filtro por ciudad
    if (filters.city) {
      updatedAnimals = updatedAnimals.filter(animal => 
        animal.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    setFilteredAnimals(updatedAnimals);
  };

  const handleAdoptClick = (animal) => {
    alert(`¡Has mostrado interés en adoptar a ${animal.name}! Nos pondremos en contacto contigo pronto.`);
    // Aquí podrías implementar la lógica para abrir un formulario de adopción,
    // enviar un correo, etc.
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setChatProps(null); // Limpiar props del chat al cambiar de página
  };

  const handleStartChat = (participantName, animalName) => {
    setChatProps({ participantName, animalName });
    setCurrentPage('chat');
  };

  const handleBackFromChat = () => {
    setCurrentPage('solicitudes'); // Volver a la pantalla de solicitudes
    setChatProps(null);
  };

  return (
    <div className="min-h-screen bg-amber-50 pb-16"> {/* Añadido padding-bottom para el nav bar */}
      {currentPage === 'inicio' && <HomeScreen onNavigate={handleNavigate} />}
      
      {currentPage === 'buscar' && (
        <>
          <h1 className="text-5xl font-bold text-center text-amber-800 pt-10 mb-12 font-serif">
            Nuestros Peludos Buscan Hogar
          </h1>
          <AnimalFilter onFilterChange={handleFilterChange} />
          <AnimalProfileList animals={filteredAnimals} onAdoptClick={handleAdoptClick} />
        </>
      )}

      {currentPage === 'historias' && <HappyStoriesScreen />}
      {currentPage === 'notificaciones' && <NotificationsScreen />}
      {currentPage === 'reportar' && <ReportAnimalForm />}
      {currentPage === 'perfil' && <UserProfileScreen onNavigate={handleNavigate} />}
      {currentPage === 'donar' && <DonationScreen onNavigate={handleNavigate} />}
      {currentPage === 'solicitudes' && <AdoptionRequestsScreen onStartChat={handleStartChat} />}
      
      {currentPage === 'chat' && chatProps && (
        <ChatScreen 
          participantName={chatProps.participantName} 
          animalName={chatProps.animalName} 
          onBack={handleBackFromChat} 
        />
      )}

      {/* Aquí irían las otras pantallas que aún no tienen un componente específico */}
      {/* Por ahora, solo mostramos un mensaje si no es una de las implementadas */}
      {currentPage !== 'inicio' && 
       currentPage !== 'buscar' && 
       currentPage !== 'historias' && 
       currentPage !== 'notificaciones' &&
       currentPage !== 'reportar' &&
       currentPage !== 'perfil' &&
       currentPage !== 'donar' &&
       currentPage !== 'solicitudes' &&
       currentPage !== 'chat' && (
        <div className="text-center text-gray-600 text-xl py-20">
          Pantalla de "{currentPage}" en construcción. ¡Paciencia, humano!
        </div>
      )}

      {/* El BottomNavigationBar no se muestra en la pantalla de chat para una experiencia inmersiva */}
      {currentPage !== 'chat' && (
        <BottomNavigationBar activeTab={currentPage} onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;