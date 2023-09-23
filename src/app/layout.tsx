import DefaultWrapper from "@/compornents/DefaultWrapper";
import Header from "@/compornents/Header";
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
