"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "@/lib/atoms/Button";
import ButtonIcon from "@/lib/atoms/ButtonIcon";
import Flex from "@/lib/atoms/Flex";
import { getBackgroundImageUrl } from "@/lib/imageUtils";
import PDFViewer from "@/components/PDFViewer";
import { useRouter } from "next/navigation";

function DealersLoginPage({ data, id }) {
  const router = useRouter();
  const [attachmentURL, setAttachmentURL] = useState("");

  const handleClosePdf = () => setAttachmentURL("");

  const handlePdfClick = (ref) => {
    const url = getBackgroundImageUrl(ref);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleButtonClick = (button) => {
    const { ctaType, iframeUrl, pdfUrlResolved, _key } = button;

    const url = iframeUrl || pdfUrlResolved;
    if (!url) return;

    const finalUrl = getBackgroundImageUrl(url);
    if (!finalUrl) return;

    const isPaymentUrl = [
      "stripe",
      "paypal",
      "checkout",
      "payment",
      "pay.",
      "secure.",
    ].some((keyword) => finalUrl.toLowerCase().includes(keyword));

    if (ctaType === "pdf") {
      window.open(finalUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (ctaType === "iframe") {
      if (isPaymentUrl) {
        window.open(finalUrl, "_blank", "noopener,noreferrer");
        return;
      }

      const encoded = encodeURIComponent(finalUrl);
      window.open(finalUrl, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <PageWrapper $direction="column" $alignitems="center">
      <HeaderSection $direction="column" $alignitems="center" $fullwidth>
        <LogoWrapper $justifycontent="center" $alignitems="center">
          <LogoImage
            src={getBackgroundImageUrl(data?.brandLogo?.asset)}
            alt={data?.brandLogo?.alt}
            height={120}
            width={240}
            unoptimized
          />
        </LogoWrapper>

        <ContentSection $direction="column">
          <InfoBlock $direction="column">
            <TitleBlock $direction="column">
              <MainTitle>{data?.title}</MainTitle>
              <SubTitle>
                {data?.descriptionType === "points" ? (
                  <Fragment>
                    {data?.descriptionPoints?.map((desc, i) => (
                      <DescriptionPoints key={i}>{desc}</DescriptionPoints>
                    ))}
                  </Fragment>
                ) : (
                  <Flex $direction="column" style={{ gap: "24px" }}>
                    {data?.description?.map((desc, i) => (
                      <DescriptionText key={i}>{desc}</DescriptionText>
                    ))}
                  </Flex>
                )}
              </SubTitle>
            </TitleBlock>

            {data?.hasBanner && (
              <NoticeBox>
                <BannerText>
                  {data?.banner?.bannerTitle}: {data?.banner?.bannerDescription}
                </BannerText>
              </NoticeBox>
            )}
          </InfoBlock>

          <ButtonGrid>
            {data?.ctas?.map((button) => (
              <Button
                key={button._key}
                size="full"
                variant="outline"
                onClick={() => handleButtonClick(button)}
              >
                {button.label} <ButtonIcon />
              </Button>
            ))}
          </ButtonGrid>
        </ContentSection>
      </HeaderSection>

      {attachmentURL && (
        <PDFViewer url={attachmentURL} onClose={handleClosePdf} />
      )}
    </PageWrapper>
  );
}

export default DealersLoginPage;

/* ---------------------------- Styled Components here ---------------------------- */

const PageWrapper = styled(Flex)`
  background-color: #fff;
  padding: 40px 20px;
  color: #1a1a1a;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const HeaderSection = styled(Flex)`
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const LogoWrapper = styled(Flex)`
  margin: 10px;

  @media (max-width: 480px) {
    margin: 5px;
  }
`;

const LogoImage = styled(Image)`
  object-fit: contain;

  @media (max-width: 480px) {
    width: 150px;
    height: 80px;
  }
`;

const ContentSection = styled(Flex)`
  width: 830px;
  gap: 48px;

  @media (max-width: 1280px) {
    width: 100%;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const InfoBlock = styled(Flex)`
  gap: 20px;
  width: 100%;
`;

const TitleBlock = styled(Flex)`
  gap: 16px;
  align-self: stretch;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const MainTitle = styled.div`
  color: var(--500, #1a1919);
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: #000;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const DescriptionPoints = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const DescriptionText = styled.div`
  color: var(--100, #4e4b4b);
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const NoticeBox = styled.div`
  width: 100%;
  background: #f2f6fa;
  border-left: 2px solid var(--500, #2877b0);
  padding: 24px;
  font-size: 15px;
  font-weight: 500;
  color: #000;

  @media (max-width: 480px) {
    padding: 16px;
    font-size: 13px;
  }
`;

const BannerText = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
