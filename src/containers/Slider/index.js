import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false)
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  const imgSlider = data?.focus?.length // Récupération de la taille du tableau d'origine avant tri. 

  // Fonction permettant si ce n'est pas en pause de passer à la diapositive suivante
  const nextCard = () => {
    if (!isPaused) {
      setIndex((prevIndex) => (prevIndex < imgSlider - 1 ? prevIndex + 1 : 0));
    }
  };

  // Exécuté dès que le composant est monté et que imgSlider et isPaused est mis à jour
  useEffect(() => {
    // On appelle nextCard avec setInterval pour que le slider défile toutes les 5 secondes
    const intervalId = setInterval(nextCard, 5000);
    // Fonction de la barre espace
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        // Pour éviter le défilement par défaut de la barre espace
        event.preventDefault()

        // en fonction de son etat on met en pause ou non le slider
        if (isPaused) {
          // Si le slider est en pause, redémarrer
          setIsPaused(false);
        } else {
          // Si le slider n'est pas en pause, mettre en pause
          setIsPaused(true);
        }
      }
    };

    // Ecouteur d'évenement pour savoir quand la barre espace est actionnée
    document.addEventListener("keydown", handleKeyPress);

    // Permet de remettre à zero l'intervalle et l'évenement quand le composant est démonté, mise à jour quand l'image et ispaused change.
    return () => {
      clearInterval(intervalId);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [imgSlider, isPaused]);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div 
        key={event.title}
        >
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
            >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((radioInput, radioIdx) => (
                <input
                  key={radioInput.title}
                  type="radio"
                  name="radio-button"
                  checked={idx === radioIdx}
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;