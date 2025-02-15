import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchingInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />

      <Input
        borderRadius={20}
        placeholder="Search Games ..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchingInput;
