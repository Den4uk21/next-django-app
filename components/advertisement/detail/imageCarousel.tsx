import { CarouselProvider, Image, Slide, Slider, Dot } from 'pure-react-carousel'
import { Divider, Container, Button } from 'semantic-ui-react'

import styles from './detail.module.sass'

interface IImageCarouselProps {
  images: { id: string, image: string }[]
}

export const ImageCarousel = ({ images }: IImageCarouselProps) => {
  return (
    <div className={styles.carousel_wrapper}>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={images.length}
        dragEnabled={false}
      >
        <Slider>
          {images.map((image, index) => (
            <Slide key={image.id} tag="a" index={index}>
              <Image src={image.image} hasMasterSpinner />
            </Slide>
          ))}
        </Slider>

        <Divider />
        <Container textAlign="center">
          <Button.Group size="mini">
            {images.map((slide, index) => (
              <Button as={Dot} key={index} icon="circle" slide={index} />
            ))}
          </Button.Group>
        </Container>
      </CarouselProvider>
    </div>
  )
}