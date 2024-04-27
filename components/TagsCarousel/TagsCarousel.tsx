import { useState } from "react";
import { ScrollView, View, StyleSheet, ViewStyle } from "react-native";
import { Tag } from "../Tag/Tag";

type TagsCarouselProps = & {
  titles: string[];
  style: ViewStyle
}
export function TagsCarousel({ titles, style  }: TagsCarouselProps) {

  const [selectedTag, setSelectedTag] = useState(titles[0]);

  const handleTagPress = (title: string) => {
    setSelectedTag(title);
  };

  const tags = titles.map((title, index) => (
    <Tag
      key={index}
      title={title}
      onPress={() => handleTagPress(title)}
      selected={selectedTag === title}
    />
  ));

  return (
    <View style={{...styles.container, ...style}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {tags}
    </ScrollView>
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },

});