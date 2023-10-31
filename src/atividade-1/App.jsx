import { useState } from "react";
import Card from "./components/Card";
import products from "../products.json";

function App() {
  const [menValue, setMenValue] = useState(0);
  const [womenValue, setWomenValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);
  const [quantities, setQuantities] = useState({});

  const handleMenIncrement = () => {
    setMenValue(menValue + 1);
  };

  const handleMenDecrement = () => {
    if (menValue > 0) {
      setMenValue(menValue - 1);
    }
  };

  const handleWomenIncrement = () => {
    setWomenValue(womenValue + 1);
  };

  const handleWomenDecrement = () => {
    if (womenValue > 0) {
      setWomenValue(womenValue - 1);
    }
  };

  const handleChildrenIncrement = () => {
    setChildrenValue(childrenValue + 1);
  };

  const handleChildrenDecrement = () => {
    if (childrenValue > 0) {
      setChildrenValue(childrenValue - 1);
    }
  };

  const calcularQuantidadeItens = () => {
    const totalQuantities = {};

    products.forEach((product) => {
      const {
        name,
        quantifyPerMen,
        quantifyPerWomen,
        quantifyPerKid,
        quantityPerGroup,
        requiredGroupSize,
      } = product;

      let totalQuantity =
        menValue * quantifyPerMen +
        womenValue * quantifyPerWomen +
        childrenValue * quantifyPerKid;

      if (quantityPerGroup && requiredGroupSize) {
        totalQuantity =
          menValue + womenValue + childrenValue >= requiredGroupSize
            ? Math.ceil(
                (menValue + womenValue + childrenValue) / requiredGroupSize
              ) * quantityPerGroup
            : 0;
      }

      totalQuantities[name] = totalQuantity;
    });

    setQuantities(totalQuantities);
  };

  return (
    <>
      <section className=" w-[100vw] h-[100vh] text-center bg-[#3f373c]">
        <div className="max-w[800px] flex flex-col items-center mx-auto p-5 rounded-[10px] text-center font-firaCode">
          <h1 className="text-[54px] font-light text-[#efa360] m-[60px]">
            Churrascômetro
          </h1>
          <h3 className="text-[#FFF] font-normal text-lg">
            Precisa de uma ajudinha com o churrasco? :)
          </h3>
          <h3 className="text-[#FFF] font-normal text-lg">
            Quantas pessoas vão participar?
          </h3>
          <div className="grid grid-cols-3 auto-rows-[200px] mt-[50px]">
            <Card
              title="Homens"
              onIncrement={handleMenIncrement}
              onDecrement={handleMenDecrement}
              value={menValue}
            />
            <Card
              title="Mulheres"
              onIncrement={handleWomenIncrement}
              onDecrement={handleWomenDecrement}
              value={womenValue}
            />
            <Card
              title="Crianças"
              onIncrement={handleChildrenIncrement}
              onDecrement={handleChildrenDecrement}
              value={childrenValue}
            />
          </div>
          <button onClick={calcularQuantidadeItens}>Calcular</button>

          <label
            class="absolute cursor-pointer top-[18px] right-20 font-bold text-[#FFF]"
            for="input-theme"
            id="label-theme-text"
          >
            Tema Escuro
          </label>
          <label className="absolute right-[10px] top-[10px] inline-block w-[60px] h-[34px]">
            <input type="checkbox" id="input-theme" checked="checked" />
            <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#A0948B] transition-all duration-4000 rounded-[34px] before:absolute before:content-[''] before:w-[26px] before:h-[26px] before:rounded-[50%] before:bg-[#b5aaa1] before:transition-all before:duration-4000 before:left-[4px] before:bottom-[4px]"></span>
          </label>
          <div className="results">
            {Object.keys(quantities).map((itemName) => (
              <p key={itemName}>
                {itemName}: {quantities[itemName]}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
