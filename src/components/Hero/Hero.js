import { Button } from "../../styles/globalStyles";
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroSubTitle,
  HeroText,
  HeroBtn,
} from "./Hero.styles";

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <HeroContentText>
            <HeroTitle>
              <HeroTitleText>Get Your</HeroTitleText>
              <HeroTitleText>Favorite Cookies</HeroTitleText>
            </HeroTitle>
            <HeroSubTitle>Tasty and Rich</HeroSubTitle>
            <HeroText>
              Get tasty cookies that are well balanced and will improve your
              wellness, plus add nutrients to your body.
            </HeroText>
            <HeroBtn to="/cookies/about">
              <Button primary big bigFont bigRadius>
                Pick your meals
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
