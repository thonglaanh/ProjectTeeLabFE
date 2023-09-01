import React from 'react'
import '../styles/About.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
const About = () => {
    return (
        <div>
            <Header />
            <div className="about">
                <p className='header-about' style={{ margin: '30px 0px', fontWeight: 'bold' }}>About us</p>
                <p class="title-about">WHO WE ARE<br />TEELAB - Share your Color<br />/ Ti - láp /</p>
                <p class="content-about" style={{ margin: '60px 0px 0px 0px' }}>Teelab là thương hiệu thời trang đường phố dẫn dầu xu hướng với phong cách thiết kế đơn giản, sành điệu, <br />sản phẩm tiêu chuẩn cao dành cho giới trẻ toàn cầu tự tin thể hiện cá tính. </p>
                <img src="https://levents.asia/wp-content/uploads/elementor/thumbs/homepage-ngang-4-1-scaled-prlzs731tmqluu3qoxoodpyzvmm53nywlrfokljhu8.jpg" title="Homepage Ngang 4" alt="Homepage Ngang 4"></img>
                <div className="container-content">
                    <p class="title-about">WHAT WE DO<br />Young generation ally</p>
                    <p class="content-about">Sứ mệnh của Teelab® là Cổ vũ cho thế hệ trẻ toàn thế giới tự do thể hiện phong cách thông qua thời trang, thương hiệu vượt qua ranh giới của thời trang đường phố bằng cách không ngừng sáng tạo các trang phục trong các bộ sưu tập độc đáo. Teelab® mong muốn đồng hành và tôn vinh thế hệ trẻ tài năng qua những xu hướng thời trang và hoạt động cộng đồng sáng tạo. Từ đó tạo dấu ấn cho giá trị bền vững để cùng các tài năng trẻ phát triển.</p>
                </div>
                <img src="https://levents.asia/wp-content/uploads/elementor/thumbs/homepage-ngang-2-1-scaled-prlzqw34bwy9qc00bddbx1ty6d1sessbratekrh6hc.jpg" title="Homepage Ngang 2" alt="Homepage Ngang 2"></img>
                <div className="container-content">
                    <p class="content-about">Mặc đẹp hơn để cuộc sống tốt hơn. <br /><br />
                        Tầm nhìn độc đáo của Teelab chính là để mỗi cá nhân tự do thể hiện phong cách khi khoác lên mình những sản phẩm được tạo nên từ sự đam mê, mang giá trị của thế hệ mới, đầy trẻ trung, năng động và luôn không ngừng khẳng định bản thân, hướng đến tương lai. <br /><br />
                        Sự đầu tư từ chất lượng đóng gói, bao bì sản phẩm đến mỗi thước phim, hình ảnh cho tới cách làm chủ được nghệ thuật sắc màu và chỉn chu trong từng chi tiết đã đưa Teelab® trở thành một trong những thương hiệu thời trang Đường phố được giới trẻ yêu thích, tin dùng hàng đầu tại Việt Nam.</p>
                    <p class="title-about">WHY WE DO<br />The first step to better vibes</p>
                </div>

                <img src="https://levents.asia/wp-content/uploads/2023/03/1920x760-1920x988.png" title="Untitled 3 1" alt="Untitled 3 1">

                </img>
            </div>
            <Footer />
        </div>
    )
}

export default About
