import DefaultWrapper from "@/components/DefaultWrapper";
import Header from "@/components/Header";
import { Providers } from "./providers";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="ja">
      <body>
        <Providers>
          <Header />
          <DefaultWrapper>
            {children}
          </DefaultWrapper>
        </Providers>
      </body>
    </html>
  );
}
