import CarForm from "./components/CarForm";
import CarList from "./components/CarList";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Araba Yönetimi</h1>
      </div>
      <CarForm />
      <div className="my-8">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-4">
          Arabalarım
        </h3>
        <CarList />
      </div>
    </div>
  );
}
