const translations_top = {            
    en: {
        training: "Workouts",
        nutrition: "Nutrition Plan",
    },

    de: {
        training: "Trainingspläne",
        nutrition: "Ernährungspläne",
    }
};

const translations_index = {            
    en: {
        title: "FFYL - Home",
        brands_text: "The Brands of your choice :",
        start_text: "Everything you need to know at start :"
    },

    de: {
        title: "FFYL - Startseite",
        brands_text: "Auf diese Marken solltest du bauen :",
        start_text: "Alles was du zum Start wissen solltest :"
    }
};

const translations_nutrition = {            
    en: {
        title: "FFYL - Nutrition",
        plan: ()=>document.getElementById("plan").src = "./text_en.txt"
    },

    de: {
        title: "FFYL - Ernährung",
        plan: ()=>document.getElementById("plan").src = "./text_de.txt"
    }
};

const translations_training = {            
    en: {
        title: "FFYL - Workouts",
        training_h1: "It's never to late !", 
        m_text: ()=>document.getElementById("m_text").src = "./training_en.html"
    },

    de: {
        title: "FFYL - Trainingspläne",
        training_h1: "Es ist nie zu spät !", 
        m_text: ()=>document.getElementById("m_text").src = "./training_de.html"
    }
};

const studios = {            
    en: {
        title: "FFYL - The Best Studios"
    },

    de: {
        title: "FFYL - Die besten Studios"
    }
};

function changeLang() {
    let locationArray = window.location.href.split("/");
    if (locationArray[locationArray.length - 1] === "nutrition.html") {
        // Sprachauswahl speichern
        const selectedLang = document.getElementById("country").value;

        document.getElementById("title").textContent = translations_nutrition[selectedLang].title;
        document.getElementById("training").textContent = translations_top[selectedLang].training;
        document.getElementById("nutrition").textContent = translations_top[selectedLang].nutrition;
        translations_nutrition[selectedLang].plan();

    } 
    else if (locationArray[locationArray.length - 1] === "training.html") 
    {
        const selectedLang = document.getElementById("country").value;

        document.getElementById("title").textContent = translations_training[selectedLang].title;
        document.getElementById("training").textContent = translations_top[selectedLang].training;
        document.getElementById("nutrition").textContent = translations_top[selectedLang].nutrition;
        document.getElementById("training_h1").textContent = translations_training[selectedLang].training_h1;
        translations_training[selectedLang].m_text();
    } 
    else { // index
        const selectedLang = document.getElementById("country").value;

        document.getElementById("title").textContent = translations_index[selectedLang].title;
        document.getElementById("training").textContent = translations_top[selectedLang].training;
        document.getElementById("nutrition").textContent = translations_top[selectedLang].nutrition;
        document.getElementById("brands_text").textContent = translations_index[selectedLang].brands_text;
        document.getElementById("start_text").textContent = translations_index[selectedLang].start_text;
    }
}

// Text aktualisieren
document.getElementById("country").addEventListener("change", changeLang);

// Sprache ändern
changeLang();