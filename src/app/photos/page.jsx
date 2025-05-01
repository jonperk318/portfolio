"use client"
import CldImage from "@/components/cldImg";
import {motion} from "framer-motion";

/*
  const [photos, setPhotos] = useState("");
  const [loading, setLoading] = useState(true);
  const getData = async (tag) => {
    const response = await fetch(
      `https://res.cloudinary.com/difdjam1a/image/list/${tag}.json`
    );
    console.log(response)
    const data = await response.json();
    setPhotos(data);
    setLoading(false);
  };
  useEffect(() => {
    getData("portfolio-gallery");
  }, []);
*/


const PhotosPage = () => {

    const photos = ["aquarium_otjp4f", "beach_m5ay3c", "car_oaeueh", "carlowe_xrszq7", "cascade_gsi054", "concert_z9chv5", "glow_mkm8pz", "happy_coaa8o", "high-peak_ybn2cc", "hike_nxfwt0", "jellyfish_amo3os", "lake_lhx6dt", "leaf_ikyens", "lighthouse_c1l0cs", "lunar-eclipse_mxmabx", "meditate_nrjd4q", "mist_cr7jkt", "ocean_ibypjb", "peace_an2llt", "plant_eroddx", "plants_hy8zdt", "soo_qunhpl", "wicked_xyzlwy", "yellow-flowers_cvmqru", "aquarium2_ktxfk5", "cactus_ue7e7p", "danish_khjwcs", "empire_d3h1dc", "flashlight_ndgrfj", "flowers_d65ggr", "gardens_g6blhy", "guard_nmqxdm", "horsehair2_svsetj", "horsehair_p2dncx", "horsehair3_rigiej", "house-date_jgtzvu", "jellyfish2_gvcn2y", "jellyfish3_khp90a", "korea_lwc29n", "light-tree_ga6wdc", "mar1_peptw8", "mel_mrpqg7", "mesa_w4mmtd", "miami_btrjcl", "moss-rock_samkx8", "noodles_lgotyz", "palm_kjkibj", "pj_l5seip", "pumpkin_hlisim", "ruffner_g3dhpu", "seol_cewicp", "squad_jtwwt5", "sunny_b0pjzi", "tank_ok7dmj", "tennissee_falg9y", "tree_nfkssu", "wedding_j345p6", "universal_impuim", "wetland_srkzfl", "woah_yk3jv0", "wine_sp2kro", "astronaut_fqvqvq", "cheaha2_qkidec", "fancy_gby5uo", "flower_cozflz", "magnets_klexpl", "mar2_kt9lun", "pink-flowers_jqezjp", "ruins_n1wlx8", "snow_ktxrnc", "tulips_zwqmpy", "cheaha_ovuvrk", "kabsa_mkf8o5", "everglades_hcrtdr", "fred_uwvrjg", "fred2_tga6n2"]

    return (
        <motion.div
        className="h-full"
        initial={{y: "-400vh"}}
        animate={{y: "0%"}}
        transition={{duration: 1}}
        >
            <div className="columns md:columns-2 lg:columns-3 relative z-10 gap-4 justify-center bg-black/[0.5] p-4 space-y-4">
                {photos.map((photo, idx) => (
                    <div key={idx} className="h-auto max-w-full">
                      <CldImage publicId={photo} />
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default PhotosPage;
