import { useState } from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import { FilterItem } from "../FilterItem";

type TagsCarouselProps = & {
  titles: string[];
  style?: ViewStyle;
}

export function TagsCarousel({ titles, style  }: TagsCarouselProps) {
  const [selectedTag, setSelectedTag] = useState(titles[0]);

  const handleTagPress = (title: string) => setSelectedTag(title);

  return (
    <View style={{ ...style }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 15, paddingHorizontal: 35 }}>
        {titles.map((title, index) => {
          return (
            <FilterItem 
              key={index}
              title={title} 
              isSelected={selectedTag === title} 
              onPress={() => handleTagPress(title)} 
            />
          )
        })}
      </ScrollView>
    </View> 
  );
};