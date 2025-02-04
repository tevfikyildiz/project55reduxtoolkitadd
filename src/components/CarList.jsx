import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../features/cars/carsSlice";
function CarList() {
  // Yapılacaklar: store'dan arabaları alın
  const cars = useSelector((state) => state.cars.cars) || [];
  const count = useSelector((state) => state.cars.count);
  const dispatch = useDispatch();

  const onClick = (id) => {
    // Yapılacak: Arabayı silin
      dispatch(removeCar(id)); 
    };
  

  const renderedCars = cars.map((car) => {
    return (
      <div
        key={car.id}
        className="flex justify-between items-center bg-white p-4 m-4 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
      >
        <p className="text-xl font-semibold">
          {car.name} - <span className="text-green-600">${car.value}</span>
        </p>
        <button
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300"
          onClick={() => onClick(car.id)}
        >
          Sil
        </button>
      </div>
    );
  });

  return (
    <div className="space-y-4">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="text-center text-lg italic text-gray-500">
          Başlamak için araba ekleyin
        </div>
      )}
      <div className="bg-green-100 p-4 rounded-xl mt-6 shadow-lg text-center font-semibold text-lg">
        Toplam Araba Sayım: <span className="text-green-700">{count}</span>
      </div>
    </div>
  );
}

export default CarList;
