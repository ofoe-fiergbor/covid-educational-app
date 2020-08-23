import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
          image: require("../img/one.jpg"),
        },
        {
          title: "Item 2",
          text: "Text 2",
          image: require("../img/two.jpg"),
        },
        {
          title: "Item 3",
          text: "Text 3",
          image: require("../img/three.jpg"),
        },
        {
          title: "Item 4",
          text: "Text 4",
          image: require("../img/four.jpg"),
        },
        {
          title: "Item 5",
          text: "Text 5",
          image: require("../img/five.jpg"),
        },
      ],
    };
  }
  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "whitesmoke",
          borderRadius: 5,
          height: 250,
          marginLeft: 25,
          marginRight: 15,
          //   elevation: 5,
        }}
      >
        <Image source={item.image} style={{ height: 150, width: 260 }} />
        <TouchableOpacity>
          <Text style={{ fontSize: 30 }}>{item.title}</Text>
          <Text>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <View>
        {/* //Carousel */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={1}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
