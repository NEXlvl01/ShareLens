import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const cameras = [
    {
      id: 1,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/643006ae9890a130c8f1b040_arri_alexa_mini_sharegear.png",
      title: "Arri Alexa Mini",
      desc: "Discover the Arri Alexa Mini, a versatile and compact camera that combines superior image quality with efficient workflows. Ideal for various production environments, it offers multiple recording formats, sensor modes, and lens illumination options. With the ARRI Look File, you can apply ASC CDL and 3D LUTs for live grading. Explore the camera's features, download sample footage, and familiarize yourself with the menu for a seamless pre- and post-production experience. For further assistance, consult our Digital Workflow Department for in-depth questions or workflow concerns.",
      price: 10249,
      availability: true,
    },

    {
      id: 2,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/6200deb02ad0ffbb41982143_arri_alexa_mini_lf_base_package.PNG",
      title: "Arri Alexa Mini LF",
      desc: "The Arri Alexa Mini LF offers large-format, high-speed cinematography with stunning image quality. This versatile camera features a sensor slightly larger than full frame, capturing native 4.5K with ARRI's signature colorimetry and pleasing skin tones. Record in efficient ProRes or uncompressed ARRIRAW up to 150 fps, and enjoy flexible recording formats for various workflows. The new LPL lens mount and EVF-2 electronic viewfinder provide more flexibility and a wider gamut for HDR deliverables. Perfect for narrative, commercial, and documentary projects, the Alexa Mini LF delivers immersive, cinematic images with incredible detail and texture.",
      price: 15350,
      availability: true,
    },

    {
      id: 3,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/65d2f6d44f1e37947c9c8194_bmpcc6k_pro_package.png",
      title: "Blackmagic Design Pocket Cinema Camera 6K Pro Package",
      desc: "Experience the Blackmagic Design Pocket Cinema Camera 6K Pro Package, a powerful handheld digital film camera. With a 6K Super 35 HDR sensor, dual native ISO, and EF lens mount, it delivers stunning image quality. The adjustable HDR touchscreen, built-in ND filters, and larger battery enhance usability. Record in Blackmagic RAW or ProRes onto USB-C disks, and utilize the optional OLED viewfinder. This versatile package also includes Blackmagic RAW Speed Test, DaVinci Resolve Studio, and a 12-month warranty for an unmatched cinematic experience.",
      price: 6400,
      availability: true,
    },

    {
      id: 4,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/60fbc0c8f0c2ef85e529d576_5d_m4_package.png",
      title:
        "Canon EOS 5D Mark IV + EF 24-70mm f/2.8L II USM Zoom Lens Package",
      desc: "Experience the Canon EOS 5D Mark IV with the EF 24-70mm f/2.8L II USM Zoom Lens Package, offering exceptional image quality and versatility. The full-frame camera boasts a 30.4 MP sensor, 4K video recording, and Dual Pixel CMOS AF. The L-series lens delivers sharp images, fast autofocus, and a wide f/2.8 aperture. This combination is perfect for professional photographers and videographers demanding high performance in various shooting scenarios.",
      price: 2500,
      availability: true,
    },

    {
      id: 5,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/65cedcfb7522f40578602378_canon_r6_ii_24_70_rf_package.png",
      title:
        "Canon EOS R6 Mark II + RF 24-70mm f/2.8L IS USM Zoom Lens Package",
      desc: "Discover the Canon EOS R6 Mark II with RF 24-70mm f/2.8L IS USM Zoom Lens Package, a powerful full-frame mirrorless camera. With a 24.2 MP sensor, 4K video recording, and Dual Pixel CMOS AF, it delivers stunning image quality. The L-series lens offers sharp images, fast autofocus, and a wide f/2.8 aperture. This combination is perfect for professionals and enthusiasts demanding high performance in various shooting scenarios. Experience enhanced ISO capabilities, improved shooting speed, and accurate autofocus, making it an excellent choice for capturing nature, photography, and travel.",
      price: 3700,
      availability: true,
    },

    {
      id: 6,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/65cedb0731c58c6c0477c185_gh4_zoom_lens_package.png",
      title: "Panasonic GH4 + 12-35mm f/2.8 Zoom Lens Package",
      desc: "The Panasonic GH4, combined with the Lumix 12-35mm f/2.8 Zoom Lens, offers a versatile and powerful 4K video recording package. This compact and lightweight setup delivers stunning image quality with a wide focal length range and fast aperture. For optimal sharpness, consider using an aperture between f/5.6 and f/8, depending on your subject distance. To achieve maximum depth of field, consider focusing on the farthest object in your frame. This combination is perfect for various shooting scenarios, from documentaries to events and more.",
      price: 1500,
      availability: true,
    },

    {
      id: 7,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/63f5b4b3ee6d099fd585d746_sony_a7_iv_24%2B70_gm.png",
      title: "Sony A7 IV + FE 24-70mm f2.8 GM II Zoom Lens Package",
      desc: "The Sony A7 IV, combined with the FE 24-70mm f2.8 GM II Zoom Lens, offers a powerful full-frame mirrorless camera package. The lens boasts improved features, autofocus, and image quality over its predecessor. With a constant maximum aperture of f2.8, this versatile combination is perfect for various shooting scenarios, including portraits, weddings, and cinematography. The lens features a compact design, weather sealing, and customizable physical controls, making it an ideal choice for professionals and enthusiasts alike.",
      price: 2400,
      availability: true,
    },

    {
      id: 8,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/65ced991ac20d8acf02d488d_sony_fx6_24_70_gm_package.png",
      title: "Sony FX6 + FE 24-70mm f/2.8 GM II Zoom Lens Package",
      desc: "The Sony FX6, combined with the FE 24-70mm f/2.8 GM II Zoom Lens, offers a powerful full-frame cinema camera package. The lens boasts improved features, autofocus, and image quality over its predecessor. With a constant maximum aperture of f/2.8, this versatile combination is perfect for various shooting scenarios, including documentaries, events, and cinematography. The lens features a compact design, weather sealing, and customizable physical controls, making it an ideal choice for professionals and enthusiasts alike. The FX6's advanced autofocus, 4K recording, and high-speed capabilities make it a powerful tool for capturing stunning visuals.",
      price: 6500,
      availability: true,
    },

    {
      id: 9,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/63f43ccc2ff7a72f6ac9e3f7_bmpcc6K_pro_body.png",
      title: "Blackmagic Design Pocket Cinema Camera 6K Pro Body",
      desc: "The Blackmagic Pocket Cinema Camera 6K Pro is a handheld digital film camera with a 6144 x 3456 Super 35 HDR sensor and EF lens mount. It features built-in 2, 4, and 6 stop motorized ND filters, a super bright 1500 nit HDR screen, and a multifunction handgrip with all controls for recording, ISO, WB, and shutter angle at your fingertips. The camera is capable of recording 4K and 6K resolutions at up to 60 fps, and supports Blackmagic RAW and ProRes recording. The Blackmagic Pocket Cinema Camera 6K Pro is perfect for capturing high-quality digital film images in various shooting scenarios.",
      price: 1300,
      availability: true,
    },
  ];

  const lenses = [
    {
      id: 1,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/65c1952a0d4db5c96f097233_canon_cne_set.png",
      title: "Canon CN-E Cinema Primes (4x Lens Set)",
      desc: "The Canon CN-E Cinema Primes (4x Lens Set) is a high-quality set of lenses designed for professional cinematography. The set includes four lenses with focal lengths of 14mm, 24mm, 35mm, and 50mm, providing a versatile range of options for capturing stunning footage. These lenses feature a fast T1.5 aperture, allowing for beautiful bokeh and low-light performance. They are also color-matched to ensure consistent color reproduction across all four lenses. With their robust build quality and advanced optical design, the Canon CN-E Cinema Primes (4x Lens Set) is an ideal choice for filmmakers and cinematographers seeking exceptional image quality and creative flexibility.",
      price: 2200,
      availability: true,
    },

    {
      id: 2,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/62daa7ca8435c01259121b15_canon-zoom-lens-kit-removebg-preview.png",
      title: "Canon EF 3x Zoom Lens Kit",
      desc: "The Canon EF 3x Zoom Lens Kit offers a versatile and affordable lens option for photographers. This lens set boasts a 3x zoom range, providing flexibility to capture a wide range of subjects. With a focal length range of 28-80mm, it is suitable for various photography styles, from landscapes to portraits. Its wide-angle view at 28mm is perfect for capturing expansive scenes, while the telephoto end at 80mm allows for close-ups and detailed shots. The lens features a fast and quiet autofocus system, ensuring sharp images in different shooting scenarios. Its compact and lightweight design makes it an excellent choice for travel and everyday photography. Overall, the Canon EF 3x Zoom Lens Kit is an excellent value for those looking to enhance their photography skills and explore different focal lengths.",
      price: 1500,
      availability: true,
    },

    {
      id: 3,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/63f9c098f4b808e2ea4439ed_canon_cne_24_cinema_lens.png",
      title: "Canon CN-E Cine Prime 24mm T1.5 LF Lens",
      desc: "High-performance prime lens with a wide-angle focal length of 24mm. Fast T1.5 aperture, advanced optical technology, and robust build quality. Ideal for cinematography and professional filmmaking. Features consistent color reproduction, smooth focus, and a large-diameter aspherical lens for sharp and accurate image reproduction.",
      price: 1200,
      availability: true,
    },

    {
      id: 4,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/62fa3d212697061cbddfecb3_Canon_100_MM.png",
      title: "Canon EF 100mm f/2.8 Macro IS USM Prime Lens",
      desc: "The Canon EF 100mm f/2.8 Macro IS USM Prime Lens is a high-quality lens that offers macro photography with life-size (1x) magnification. It boasts a three-group floating system for exceptional close-up performance and a secondary diaphragm that increases contrast when shooting wide open. With its ultra-sonic monitor (USM) and inner focusing system, this lens provides outstanding autofocusing speed and smooth manual focusing. Its sturdy build and one-year warranty make it a reliable choice for photographers.",
      price: 800,
      availability: true,
    },

    {
      id: 5,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/6147919e8a8b04a52ea8b0b7_60fcf8d32c973b768b0628ba_canon_70-200_lens.png",
      title: "Canon EF 70-200mm f/2.8L IS II USM Zoom Lens",
      desc: "The Canon EF 70-200mm f/2.8L IS II USM Zoom Lens is a high-performance telephoto lens that offers exceptional image quality and versatility. Its fast f/2.8 aperture and four-stop image stabilization make it ideal for shooting sports, wildlife, and low-light conditions. With its advanced optical design and weather-sealed construction, this lens delivers sharp, vibrant images with minimal distortion and chromatic aberration. Its ultrasonic motor (USM) provides fast, silent autofocusing, and its removable tripod collar and rotating tripod mount make it easy to use with a variety of shooting styles.",
      price: 1050,
      availability: true,
    },

    {
      id: 6,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/614791a2032ab555d77ee590_60fcf962d7c2157950c7921a_lumix_12-35_ii_lens%2520(1).png",
      title: "Panasonic Lumix 12-35mm f/2.8 II Zoom Lens",
      desc: "The Panasonic Lumix 12-35mm f/2.8 II Zoom Lens is a versatile and high-performance lens for Micro Four Thirds cameras. Its wide-angle to telephoto focal length range of 12-35mm (equivalent to 24-70mm in 35mm format) makes it ideal for a variety of shooting scenarios, from landscapes to portraits. Its constant f/2.8 aperture ensures consistent exposure and excellent low-light performance, while its advanced optical design reduces distortion and chromatic aberration. Its compact and lightweight design, combined with its fast and silent autofocusing, make it a great choice for both stills and video shooters.",
      price: 929,
      availability: true,
    },

    {
      id: 7,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/614791af37667d6225c768d8_60fcfe0a8e13d98d0f95b42c_sony_18-200_lens.png",
      title: "Sony E 18-200 f/3.5-6.3 OSS Zoom Lens",
      desc: "The Sony E 18-200mm f/3.5-6.3 OSS Zoom Lens is a versatile lens with a wide range of focal lengths, making it suitable for various shooting scenarios. Its Optical SteadyShot image stabilization reduces camera shake, while its circular aperture creates pleasing bokeh effects. The lens is compact and lightweight, making it a great option for travel photography. Its autofocus is fast and accurate, and its build quality is robust, making it a reliable choice for photographers of all levels.",
      price: 1230,
      availability: true,
    },

    {
      id: 8,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/63fd94a0bbf0a53aa98a7cc5_sony_fe_70_200.png",
      title: "Sony FE 70-200mm f/2.8 GM Zoom Lens",
      desc: "The Sony FE 70-200mm f/2.8 GM Zoom Lens is a high-performance telephoto lens designed for Sony's full-frame mirrorless cameras. Its fast f/2.8 aperture and advanced optical design deliver sharp, clear images with minimal distortion and chromatic aberration. The lens features a ring drive SSM autofocus system that is fast, quiet, and accurate, making it ideal for sports and wildlife photography. Its dust and moisture-resistant construction ensure reliability in various shooting conditions. The lens also includes a focus range limiter and a focus hold button for added flexibility. Overall, the Sony FE 70-200mm f/2.8 GM Zoom Lens is a top-of-the-line telephoto lens that delivers exceptional image quality and performance.",
      price: 1780,
      availability: true,
    },

    {
      id: 9,
      image:
        "https://assets-global.website-files.com/60c9dc6787615a5a1cf75212/614791b16ccbc6aa776a8aa5_60fcfe6841780d9f68741677_veydra_25_lens%2520(1).png",
      title: "Veydra 25mm T/2.2 Mini Prime Lens",
      desc: "The Veydra 25mm T/2.2 Mini Prime Lens is a high-quality lens with a 31mm image circle, perfect for APS-C sensor cameras. It features a 300-degree focus rotation and a 77mm front diameter, with a T-stop range of T2.2 to T22. This lens is purpose-built for cinema acquisition, with constant volume focus and 0.8 cinema pitch gears on the iris/focus rings. It is available in Micro4/3, C-Mount, Sony FZ, and Sony E Mount, and is designed with quality and value in mind.",
      price: 1920,
      availability: true,
    },
  ];

  const [specificProd, setSpecificProd] = useState({});

  const [loginStatus, setLoginStatus] = useState(false);

  const [rentalDetails, setRentalDetails] = useState({
    pickupDate: "",
    dropDate: "",
  });

  const data = {
    cameras,
    lenses,
    specificProd,
    setSpecificProd,
    loginStatus,
    setLoginStatus,
    rentalDetails,
    setRentalDetails,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
