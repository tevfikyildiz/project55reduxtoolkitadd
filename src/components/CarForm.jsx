import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../features/cars/carsSlice";

function CarForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Yapılacaklar: Arabayı store'a kaydet
    dispatch(addCar({ name, value: Number(value) }));
    setName("");
    setValue("");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto mt-10">
      <h4 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Araba Ekle
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Marka
          </label>
          <input
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Audi"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Fiyat
          </label>
          <input
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="0"
            required
          />
        </div>
        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
