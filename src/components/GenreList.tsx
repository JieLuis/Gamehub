import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCropedImageUrl from "../service/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <>
      {error && null}
      {isLoading && <Spinner marginY="15px" />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCropedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
