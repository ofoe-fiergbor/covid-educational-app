import React from "react";
import { Image, Text, View } from "react-native";
import Carousel from "pinar";
import mask from "../../img/mask.png";
import sanitize from "../../img/sanitize.png";
import wash from "../../img/wash.png";

const styles = {
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },

  head_text: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 33,
    color: "#fff",
  },

  icon: {
    marginBottom: 30,
  },
  rounded: {
    width: 200,
    height: 200,
    backgroundColor: "#eee",
    borderRadius: 150,
    alignItems: "center",
  },
  slideText: {
    marginVertical: 50,
    alignItems: "center",
  },
  image: {
    height: 210,
    width: 100,
    marginTop: 20,
  },
  image1: {
    height: 210,
    width: 140,
    marginTop: 20,
  },
  image3: {
    height: 210,
    width: 95,
    marginTop: 20,
  },
  headDescription: {
    fontFamily: "Quicksand_700Bold",
    alignSelf: "center",
    fontSize: 15,
    color: "#cfcfcf",
  },
  mainHead: {
    marginVertical: 30,
  },
};

const Swiper = () => (
  <Carousel
    showsControls={false}
    autoplay={true}
    loop={true}
    autoplayInterval={2000}
    showsDots={false}
  >
    {/* First Slide */}
    <View style={styles.slide}>
      <View style={styles.rounded}>
        <Image source={mask} style={styles.image} />
      </View>
      <View style={styles.slideText}>
        <Text style={styles.head_text}>Wear Mask</Text>
        <View style={styles.mainHead}>
          <Text style={styles.headDescription}>
            Before putting on a mask, clean hands
          </Text>
          <Text style={styles.headDescription}>
            with alcohol-based rub or soap and
          </Text>
          <Text style={styles.headDescription}>water.</Text>
        </View>
      </View>
    </View>

    {/* Second Slide */}
    <View style={styles.slide}>
      <View style={styles.rounded}>
        <Image source={sanitize} style={styles.image1} />
      </View>
      <View style={styles.slideText}>
        <Text style={styles.head_text}>Use Sanitiser</Text>
        <View style={styles.mainHead}>
          <Text style={styles.headDescription}>
            To protect yourself and others, clean
          </Text>
          <Text style={styles.headDescription}>
            your hands with alcohol-based
          </Text>
          <Text style={styles.headDescription}>sanitizer frequently.</Text>
        </View>
      </View>
    </View>

    {/* Third Slide */}
    <View style={styles.slide}>
      <View style={styles.rounded}>
        <Image source={wash} style={styles.image3} />
      </View>
      <View style={styles.slideText}>
        <Text style={styles.head_text}>Hand Wash</Text>
        <View style={styles.mainHead}>
          <Text style={styles.headDescription}>
          Contaminated hands can transfer the 
          </Text>
          <Text style={styles.headDescription}>
          virus to your body through your eyes, 
          </Text>
          <Text style={styles.headDescription}>nose or mouth</Text>
        </View>
      </View>
    </View>
  </Carousel>
);
export default Swiper;
