import { Stack } from "@chakra-ui/react";
import { BreadcrumbPageBody } from "components/common/BreadcrumbPageBody";
import { ChangePassword } from "components/mypage/ChangePassword";
import { MypageMenuProvider } from "components/mypage/MypageMenuProvider";
import { useAuthGuard } from "hooks/useAuthGuard";
import { useIsMobile } from "hooks/useIsMobile";
import { useRouter } from "next/router";

export default function () {
  const isMobile = useIsMobile();
  // useAuthGuard();

  return (
    <>
      {isMobile ? (
        <Stack spacing={4} width="90%" margin="auto" pt={4} pb={6}>
          <BreadcrumbPageBody title="パスワードの変更" type="mypage" typeText="マイページ">
            <ChangePassword />
          </BreadcrumbPageBody>
        </Stack>
      ) : (
        <MypageMenuProvider>
          <ChangePassword />
        </MypageMenuProvider>
      )}
    </>
  );
}
