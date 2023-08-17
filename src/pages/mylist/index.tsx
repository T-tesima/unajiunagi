import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Thumbnail } from "components/common/Thumbnail";
import { useAuthGuard } from "hooks/useAuthGuard";

export default function () {
  // useAuthGuard();

  const org = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Stack spacing={4} width="90%" margin="auto" pt={4} pb={6}>
      <Heading fontSize="4xl">マイリスト</Heading>
      <SimpleGrid columns={4} gap={6}>
        {org.map((org) => (
          <Box key={org}>
            <Thumbnail src="/img.png" alt="サムネイル" href="" />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
