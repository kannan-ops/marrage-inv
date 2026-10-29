import { getAssetUrl } from '../utils/assetUrl';

export const weddingData = {
  dates: {
    reception: "2026-11-11T07:00:00",
    muhurtham: "2026-11-11T05:00:00",
    targetCountdown: "2026-11-11T05:00:00+05:30"
  },
  couple: {
    groom: {
      name: "S. Kannan",
      degree: "B.Sc.",
      fullName: "S. Kannan, B.Sc.",
      profession: "Software Developer, Elevada Softwares P.Ltd., Covai",
      tamilName: "S. கண்ணன்",
      tamilDegree: "B.Sc.",
      tamilProfession: "Software Developer, Elevada Softwares P.Ltd., Covai",
      native: "Jangamanaickenpatti, Villipalayam, Paramathi Velur, Namakkal",
      tamilNative: "ஜங்கமநாயக்கன்பட்டி, வில்லிபாளையம், பரமத்தி வேலூர் வட்டம், நாமக்கல் மாவட்டம்",
      phone: "94443 63964"
    },
    bride: {
      name: "R. Suruthika",
      degree: "ECE.",
      fullName: "R. Suruthika, ECE.",
      profession: "B.E. ECE Graduate",
      tamilName: "R. சுருதிகா",
      tamilDegree: "ECE.",
      tamilProfession: "ECE.",
      native: "Karattupalayam, Tiruchengode, Namakkal",
      tamilNative: "கரட்டுப்பாளையம், திருச்செங்கோடு வட்டம், நாமக்கல் மாவட்டம்",
      phone: "63749 11332"
    }
  },
  traditional: {
    deities: {
      left: ["ஸ்ரீ பொம்முசாமி துணை", "ஸ்ரீ காமாட்சியம்மன் துணை"],
      center: "உ ஸ்ரீ அங்காளம்மன் துணை",
      right: ["ஸ்ரீ நல்லேந்திரசாமி துணை", "ஸ்ரீ வீரம்மா துணை"]
    },
    kural: {
      lines: [
        "அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை",
        "பண்பும் பயனும் அது"
      ],
      author: "குறள்",
      english: "If love and virtue adorn the wedded life, their joy and fruit is its eternal grace."
    },
    panjangam: {
      ta: "நிகழும் மங்கலகரமான ஸ்ரீ பராபவ வருடம் ஐப்பசி மாதம் 25-ம் நாள் (11-11-2026) புதன்கிழமை, துவிதியை திதியும், அனுஷம் நட்சத்திரமும் சித்தயோகமும் கூடிய சுபயோக சுபதினத்தில் அன்று அதிகாலை 5-00 மணிக்குமேல் 6-00 மணிக்குள் பிரம்ம முகூர்த்தத்தில்",
      en: "On the auspicious day of Sri Parabhava Year, Aippasi 25 (Wednesday, 11th November 2026), in the celestial confluence of Thvithiyai Thithi, Anusham Nakshathiram and Siddhayogam, during the sacred Brahma Muhurtham between 5:00 AM and 6:00 AM"
    },
    groomSide: {
      placeTa: "நாமக்கல் மாவட்டம், பரமத்தி வேலூர் வட்டம், வில்லிபாளையம், ஜங்கமநாயக்கன்பட்டி",
      placeEn: "Jangamanaickenpatti, Villipalayam, Paramathi Velur, Namakkal Dt.",
      paternalTa: "தெய்வத்திரு பூசாரி - திருமதி லட்சுமி ஆகியோரின் மகன்வழி பேரன்",
      paternalEn: "Paternal Grandson of Late Poosari & Smt. Lakshmi",
      maternalTa: "திரு ராஜு - திருமதி சின்னம்மாள் ஆகியோரின் மகள்வழி பேரன்",
      maternalEn: "Maternal Grandson of Thiru Raju & Smt. Chinnammal",
      parentsTa: "P. செந்தில்குமார் - S. சுமதி ஆகியோரின் குமாரன்",
      parentsEn: "Son of Thiru P. Senthilkumar & Smt. S. Sumathi",
      fullNameTa: "திருநிறைச் செல்வன் S. கண்ணன் B.Sc.,",
      fullNameEn: "Mr. S. Kannan, B.Sc.,",
      jobTa: "(Software Developer, Elevada Softwares P.Ltd., Covai)",
      jobEn: "Software Developer, Elevada Softwares P.Ltd., Covai",
      invitersTa: [
        "P. செந்தில்குமார் - S. சுமதி",
        "தம்பி S. லோகநாதன் DME., - L. லித்திகா B.Sc.,",
        "அத்தை ருக்மணி"
      ],
      invitersEn: [
        "P. Senthilkumar - S. Sumathi",
        "Brother S. Loganathan DME., - L. Lithika B.Sc.,",
        "Aunt Rukmani"
      ],
      phone: "94443 63964"
    },
    brideSide: {
      placeTa: "நாமக்கல் மாவட்டம், திருச்செங்கோட்டு வட்டம், கரட்டுப்பாளையம்",
      placeEn: "Karattupalayam, Tiruchengode Taluk, Namakkal Dt.",
      paternalTa: "திரு N. பெரியசாமி - திருமதி P. செட்டியம்மாள் ஆகியோரின் மகன்வழி பேத்தி",
      paternalEn: "Paternal Granddaughter of Thiru N. Periyasamy & Smt. P. Chettiyammal",
      maternalTa: "திரு D. சரவணன் - S. துளசிமணி ஆகியோரின் மகள்வழி பேத்தி",
      maternalEn: "Maternal Granddaughter of Thiru D. Saravanan & Smt. S. Thulasimani",
      parentsTa: "P. ரவி - R. பிரபாவதி ஆகியோரின் குமாரத்தி",
      parentsEn: "Daughter of Thiru P. Ravi & Smt. R. Prabavathi",
      fullNameTa: "திருநிறைச் செல்வி R. சுருதிகா ECE.,",
      fullNameEn: "Ms. R. Suruthika, ECE.,",
      jobTa: "",
      jobEn: "",
      invitersTa: [
        "P. ரவி - R. பிரபாவதி",
        "அண்ணன் R. சுதீஷ் (Gold Waste Recovery Work)",
        "(லேட்) P. சுரேஷ் - S. குமரேஸ்வரி",
        "S. அனுஷ்கா, S. அனீஷ்",
        "P. ரமேஷ் - R. பிரியதர்ஷினி",
        "R. அத்விக்"
      ],
      invitersEn: [
        "P. Ravi - R. Prabavathi",
        "Brother R. Sudheesh (Gold Waste Recovery Work)",
        "(Late) P. Suresh - S. Kumareswari",
        "S. Anushka, S. Aneesh",
        "P. Ramesh - R. Priyadharshini",
        "R. Aadhvik"
      ],
      phone: "63749 11332"
    }
  },
  en: {
    tagline: "SACRED WEDDING INVITATION",
    presenting: "WITH THE BLESSINGS OF ALMIGHTY & ELDERS",
    groom: {
      title: "Groom",
      name: "S. Kannan",
      degree: "B.Sc.",
      fullName: "S. Kannan, B.Sc.",
      job: "Software Developer, Elevada Softwares P.Ltd., Covai",
      parents: "Son of P. Senthilkumar & S. Sumathi",
      residence: "Jangamanaickenpatti, Villipalayam"
    },
    bride: {
      title: "Bride",
      name: "R. Suruthika",
      degree: "ECE.",
      fullName: "R. Suruthika, ECE.",
      job: "ECE.",
      parents: "Daughter of P. Ravi & R. Prabavathi",
      residence: "Karattupalayam, Tiruchengode"
    },
    invitationNote: "With the divine blessings of our beloved family deities and elders, we cordially invite you and your family to grace the auspicious occasion of our sacred wedding ceremony.",
    countdownTitle: "COUNTING DOWN TO THE FOREVER",
    days: "Days",
    hours: "Hours",
    minutes: "Mins",
    seconds: "Secs",
    eventsTitle: "Ceremony & Celebrations",
    eventsSubtitle: "Join us in our sacred union and joyful wedding feast",
    events: [
      {
        id: "muhurtham",
        tag: "SACRED BRAHMA MUHURTHAM",
        title: "Subha Muhurtham",
        tamilTitle: "திருக்கல்யாண வைபவம்",
        date: "Wednesday, 11th November 2026",
        time: "5:00 AM – 6:00 AM (Brahma Muhurtham)",
        venue: "Arulmigu Balasubramanya Swamy Temple",
        address: "Kabilarmalai, Paramathi Velur Taluk, Namakkal Dt.",
        mapQuery: "Arulmigu Balasubramanya Swamy Temple, Kabilarmalai, Tamil Nadu",
        icon: "temple"
      },
      {
        id: "reception",
        tag: "WEDDING FEAST & RECEPTION",
        title: "Reception & Feast",
        tamilTitle: "வரவேற்பும் விருந்தும்",
        date: "Wednesday, 11th November 2026",
        time: "7:00 AM Onwards (Following Muhurtham)",
        venue: "Kannan Home (Groom's Residence)",
        address: "Jangamanaickenpatti, Villipalayam, Paramathi Velur, Namakkal",
        mapQuery: "Kannan home, 52XV+Q4G, Villipalayam, Tamil Nadu 637207",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kannan+home%2C+52XV%2BQ4G%2C+Villipalayam%2C+Tamil+Nadu+637207",
        icon: "party"
      }
    ],
    getDirections: "Get Directions (Map)",
    addToCalendar: "Add to Calendar",
    galleryTitle: "Cherished Moments",
    gallerySubtitle: "Every picture tells a story of love & togetherness",
    galleryFilterAll: "All Photos",
    galleryFilterCouple: "Couple",
    galleryFilterCeremony: "Ceremony",
    photos: [
      {
        src: getAssetUrl('/images/couple-outdoor.jpg'),
        line1: "S. Kannan, B.Sc. & R. Suruthika, ECE.",
        line2: "Two loving souls with a single rhythm, stepping into a lifetime of endless joy. 🪷✨",
        tag: "THE COUPLE",
        category: "couple"
      },
      {
        src: getAssetUrl('/images/couple-forehead.jpg'),
        line1: "S. Kannan & R. Suruthika",
        line2: "A gentle touch of pure devotion, sealing our promise across a lifetime. ❤️✨",
        tag: "SOULMATES",
        category: "couple"
      },
      {
        src: getAssetUrl('/images/couple-intimate.jpg'),
        line1: "S. Kannan & R. Suruthika",
        line2: "Walking into forever hand in hand, with hearts synchronized in eternal harmony. 🤝💖",
        tag: "ETERNAL PROMISE",
        category: "couple"
      },
      {
        src: getAssetUrl('/images/bouquet-ceremony.jpg'),
        line1: "Fragrance of Togetherness",
        line2: "Blossoming with the fragrance of holy blessings and fragrant garlands. 💐🪷",
        tag: "CEREMONY",
        category: "ceremony"
      }
    ],
    wishesTitle: "Words for Forever",
    wishesSubtitle: "Leave a wish, memory, or blessing for Kannan & Suruthika",
    tabWish: "Wish",
    tabAdvice: "Advice",
    namePlaceholder: "Your full name",
    messagePlaceholder: "Write your heartfelt wishes for Kannan & Suruthika...",
    submitWish: "Add to the Memory Book",
    wishesCount: "Wishes & Blessings",
    shareTitle: "Share the Joy",
    shareSubtitle: "Spread the happy news of Kannan & Suruthika's wedding",
    whatsappShare: "Share on WhatsApp",
    copyLink: "Copy Invitation Link",
    linkCopied: "Invitation link copied to clipboard!",
    openInvite: "Open Invitation",
    tapToOpen: "TAP TO OPEN INVITATION",
    weddingBlessing: "Your presence and blessings are our greatest gift"
  },
  ta: {
    tagline: "இனிய திருமண அழைப்பிதழ்",
    presenting: "பெரியோர்களால் நிச்சயிக்கப்பட்ட சுப முகூர்த்தம்",
    groom: {
      title: "மணமகன்",
      name: "S. Kannan",
      degree: "B.Sc.",
      fullName: "S. கண்ணன், B.Sc.",
      job: "Software Developer, Elevada Softwares P.Ltd., Covai",
      tamilName: "S. கண்ணன்",
      tamilDegree: "B.Sc.",
      parents: "P. செந்தில்குமார் - S. சுமதி ஆகியோரின் குமாரன்",
      residence: "ஜங்கமநாயக்கன்பட்டி, வில்லிபாளையம், பரமத்தி வேலூர்"
    },
    bride: {
      title: "மணமகள்",
      name: "R. Suruthika",
      degree: "ECE.",
      fullName: "R. சுருதிகா, ECE.",
      job: "ECE.",
      tamilName: "R. சுருதிகா",
      tamilDegree: "ECE.",
      parents: "P. ரவி - R. பிரபாவதி ஆகியோரின் குமாரத்தி",
      residence: "கரட்டுப்பாளையம், திருச்செங்கோடு"
    },
    invitationNote: "எல்லாம் வல்ல இறைவனின் திருவருளாலும், பெரியோர்களின் ஆசியோடும் நடைபெறும் எங்கள் இல்லத் திருமண விழாவிற்குத் தாங்களும் தங்கள் சுற்றமும் நட்பும் சூழ வருகைதந்து மணமக்களை வாழ்த்தியருள அன்புடன் அழைக்கின்றோம்.",
    countdownTitle: "சுப முகூர்த்தத்திற்கான நொடிகள்",
    days: "நாட்கள்",
    hours: "மணிகள்",
    minutes: "நிமிடங்கள்",
    seconds: "நொடிகள்",
    eventsTitle: "திருமண சுப நிகழ்வுகள்",
    eventsSubtitle: "இறைவனின் திருவருளோடு நடைபெறும் மங்கல நிகழ்வுகள்",
    events: [
      {
        id: "muhurtham",
        tag: "சுப பிரம்ம முகூர்த்தம்",
        title: "திருக்கல்யாண வைபவம் (Muhurtham)",
        tamilTitle: "திருக்கல்யாண வைபவம்",
        date: "புதன்கிழமை, 11 நவம்பர் 2026 (ஐப்பசி 25)",
        time: "அதிகாலை 5:00 மணி முதல் 6:00 மணிக்குள் (பிரம்ம முகூர்த்தம்)",
        venue: "கபிலர்மலை அருள்மிகு பாலசுப்ரமணிய சுவாமி திருக்கோவில்",
        address: "கபிலர்மலை, பரமத்தி வேலூர் வட்டம், நாமக்கல் மாவட்டம், தமிழ்நாடு",
        mapQuery: "Arulmigu Balasubramanya Swamy Temple, Kabilarmalai, Tamil Nadu",
        icon: "temple"
      },
      {
        id: "reception",
        tag: "வரவேற்பும் விருந்து உபசரிப்பும்",
        title: "வரவேற்பும் விருந்தும் (Reception & Feast)",
        tamilTitle: "வரவேற்பும் விருந்தும்",
        date: "புதன்கிழமை, 11 நவம்பர் 2026 (திருமணத்தை தொடர்ந்து)",
        time: "காலை 7:00 மணி முதல்",
        venue: "கண்ணன் இல்லம் (மணமகன் இல்லம்)",
        address: "ஜங்கமநாயக்கன்பட்டி, வில்லிபாளையம், பரமத்தி வேலூர், நாமக்கல் மாவட்டம்",
        mapQuery: "Kannan home, 52XV+Q4G, Villipalayam, Tamil Nadu 637207",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kannan+home%2C+52XV%2BQ4G%2C+Villipalayam%2C+Tamil+Nadu+637207",
        icon: "party"
      }
    ],
    getDirections: "வழிகாட்டி (Map)",
    addToCalendar: "நினைவூட்டல் பதிவு (Calendar)",
    galleryTitle: "இனிய நினைவுகள்",
    gallerySubtitle: "அன்பும் காதலும் நிறைந்த எங்கள் பொன்னான தருணங்கள்",
    galleryFilterAll: "அனைத்துப் படங்கள்",
    galleryFilterCouple: "மணமக்கள்",
    galleryFilterCeremony: "சுப நிகழ்வுகள்",
    photos: [
      {
        src: getAssetUrl('/images/couple-outdoor.jpg'),
        line1: "S. கண்ணன், B.Sc. & R. சுருதிகா, ECE.",
        line2: "இரு இதயங்கள் இணைந்த நேரம்... இனி வரும் காலம் நம் வசந்த காலம்! 🪷✨",
        tag: "மணமக்கள்",
        category: "couple"
      },
      {
        src: getAssetUrl('/images/couple-forehead.jpg'),
        line1: "S. கண்ணன் & R. சுருதிகா",
        line2: "உன் நெற்றியில் பதியும் என் அன்பின் சுவடு... நம் ஆயுள் வரை மாறாத காதல் உறவு! ❤️✨",
        tag: "காதல் பந்தம்",
        category: "couple"
      },
      {
        src: getAssetUrl('/images/couple-intimate.jpg'),
        line1: "S. கண்ணன் & R. சுருதிகா",
        line2: "கைப்பிடித்து நடைபழகும் இந்த புதிய பயணம்... காலமெல்லாம் நிலைத்திருக்கும் நம் காதல் வரம்! 🤝💖",
        tag: "வாழ்க்கைத்துணை",
        category: "couple"
      },
      {
        src: getAssetUrl('/images/bouquet-ceremony.jpg'),
        line1: "மங்கல மலர் மாலை நேரம்",
        line2: "மணக்கும் மலர்களின் சாட்சியோடு, மனங்கள் இணைந்த மங்கல தருணம்! 💐🪷",
        tag: "ஆசிர்வாதம்",
        category: "ceremony"
      }
    ],
    wishesTitle: "வாழ்த்து மடல் (Memory Book)",
    wishesSubtitle: "கண்ணன் & சுருதிகா இணையருக்கு உங்கள் வாழ்த்துகளைப் பதிவிடுங்கள்",
    tabWish: "வாழ்த்து",
    tabAdvice: "அறிவுரை",
    namePlaceholder: "உங்கள் பெயர்",
    messagePlaceholder: "கண்ணன் & சுருதிகா தம்பதியருக்கு உங்கள் வாழ்த்து செய்தியை எழுதுங்கள்...",
    submitWish: "வாழ்த்துப் பதிவிடுக",
    wishesCount: "வாழ்த்துகள் & ஆசிகள்",
    shareTitle: "மகிழ்ச்சியைப் பகிருங்கள்",
    shareSubtitle: "கண்ணன் & சுருதிகா திருமண அழைப்பிதழை அனைவருக்கும் பகிருங்கள்",
    whatsappShare: "WhatsApp-ல் பகிர",
    copyLink: "அழைப்பிதழ் லிங்க் நகலெடு",
    linkCopied: "அழைப்பிதழ் லிங்க் காப்பி செய்யப்பட்டது!",
    openInvite: "அழைப்பிதழைத் திறக்க",
    tapToOpen: "அழைப்பிதழைத் திறக்க தொடவும்",
    weddingBlessing: "தங்களின் மேலான வருகையே மணமக்களுக்கு சிறந்த ஆசிர்வாதம்"
  },
  initialWishes: []
};
