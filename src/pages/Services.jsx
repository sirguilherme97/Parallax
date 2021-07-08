import '../style/global.scss'
import { Helmet } from 'react-helmet'
import { Content } from '../components/Content'
import { BannerInfo } from '../components/BannerInfo'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ContentReverse } from '../components/Content/indexReverse'

export function Services() {
      return (
            <>
                  <Helmet>
                        <title>Parallax | Serviços</title>
                  </Helmet>
                  <BannerInfo />
                  <Nav data_aos="fade" />
                  <Content
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus  placeat  [ About us ]  Eum, asperiores quidem. Sequi, deserunt! "
                        subOne="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        subTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  />
                  <ContentReverse title="Lorem ipsum dolor sit amet consectetur adipisicing elit." subOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis odio, venenatis et nunc nec, consequat vestibulum libero. Praesent ornare in lorem at pharetra. Pellentesque bibendum justo et enim placerat fringilla. Vivamus eu facilisis dolor. Mauris porta imperdiet vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis non diam dictum, dapibus leo in, accumsan lorem. Nulla vel tincidunt magna. Donec rutrum et ligula et fringilla. Quisque commodo ipsum elit, et malesuada eros pretium id. Etiam pretium sodales enim, sed commodo nisi maximus quis. Ut maximus, justo ut commodo iaculis, arcu tellus iaculis dolor, eu eleifend nisi diam ac nibh. Nullam quam metus, bibendum non ullamcorper et, imperdiet ornare purus. Quisque nulla ex, blandit ac ultricies eu, convallis quis diam. Aenean sit amet ante id risus sodales commodo. Vestibulum nec lorem vitae mauris pellentesque sodales. Praesent eu sem accumsan, pellentesque tellus sit amet, semper libero. Praesent tincidunt tempus felis at sodales. Suspendisse vehicula lacus sit amet porttitor hendrerit. Morbi vestibulum maximus blandit. Suspendisse potenti. Nam gravida arcu et tortor laoreet, vel porta mi sodales. Integer cursus, lacus a varius lobortis, odio urna laoreet quam, auctor aliquam nisl lectus id velit. Sed sed tristique tortor. Mauris diam leo, porta ac laoreet nec, cursus nec ipsum. Donec non lectus quis sapien vulputate bibendum at a nisi. Vestibulum nec arcu vulputate, maximus nunc quis, lobortis neque. Mauris efficitur volutpat nisi quis placerat. Cras rutrum, est non scelerisque ultrices, justo nulla tempor arcu, a rutrum ex neque ultricies mi. Cras euismod massa lorem, laoreet imperdiet leo suscipit blandit. Nulla rhoncus aliquam mi, eget volutpat dui placerat at. Morbi lacinia, odio eu tincidunt efficitur, ante odio convallis diam, eu faucibus augue dui quis erat. Vestibulum sit amet nisi fermentum, egestas augue eget, accumsan sem. Vivamus urna erat, congue et odio in, rhoncus commodo leo. Curabitur vulputate tortor ac dolor efficitur, vel suscipit velit pellentesque. Nunc molestie molestie metus. Curabitur lobortis lobortis lectus in posuere. Ut ut ante in sapien faucibus accumsan. Vivamus posuere euismod laoreet. Donec nisl lorem, vulputate et elementum et, laoreet ac lorem. Vivamus aliquet mauris sed posuere scelerisque." />
                  <Footer />
            </>
      )
}