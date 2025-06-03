import { Parallax } from "react-parallax";
import './home.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Helmet } from 'react-helmet';
const Home=()=>{
    return(
        <section>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="container" >
                <Parallax className="img-fluid" bgImage="/img/bg1.png" strength={300}>
                    <div style={{ height: 550 }}>
                        <div style={{ position: 'relative', top: '200px', textAlign: 'center', color: 'white' }}>
                            <img src="/img/iam.png" className="img-fluid" alt="/" width="200" />
                        </div>
                    </div>
                </Parallax>

                <div className="text-white">
                    <h5>สวัสดีครับผม ชนน ทองเปลว</h5>
                    <h6>ผมมีความสนใจในการเขียนโปรแกรม และงานด้าน IT เป็นอย่างมากจึง
                    ได้ทำการศึกษาต่อจนจบในสาขาเทคโนโลยีคอมพิวเตอร์เมื่อวันที่ 25 เมษายน พ.ศ.2567 ที่ผ่านมา 
                    ผมตั้งใจที่จะพัฒนาความสามารถด้านการเขียนโปรแกรม และด้าน IT ให้เชี่ยวชาญมากยิ่งขึ้น และหวังว่าจะสามารถนำทักษะเหล่านี้มาช่วยแก้ปัญหาและสร้างสิ่งใหม่ ๆ ในอนาคต
                    <br/><br/>ผมสร้างเว็บนี้ขึ้นมา เพื่อแนะนำตัว และฝึกความสามารถของตัวตัวเองขอบคุณที่เข้ามาเยี่ยมชมครับ</h6>
                </div>
            </div>

            <div className="bg-grey text-white box-hr">
                <ul>
                    <div className="padding-top20">
                        <h5>การศึกษา</h5>
                        <h6>
                            ป.ตรี เทคโนโลยีคอมพิวเตอร์คณะวิทยาศาสตร์และเทคโนโลยี<br/>
                            มหาวิทยาลัยราชพัฏนครปฐมสำเร็จการศึกษา ปี พ.ศ.2567
                            <br/>เกรดเฉลี่ย : 3.76
                        </h6>
                        <h6>
                            ปวช.อิเล็กทรอนิกส์<br/>
                            วิทยาลัยเทคนิคราชบุรี 2
                            <br/>เกรดเฉลี่ย : 3.16
                        </h6>
                    </div>

                    <div className="padding-top20">
                        <h5>ความสามารถ</h5>
                            <img src="/img/htmlJsCss.png" width="170px" alt="/" />
                            <img src="/img/java.png" width="100px"  alt="/" />
                            <img src="/img/react.png" width="80px" alt="/" />
                    </div>
                    <div className="padding-top20">
                        <h5>เครื่องมือที่ใช้</h5>
                        <img src="/img/vscode.png" alt="/" width="200px" />
                        <img src="/img/android.png" alt="/" width="220px" />
                    </div>
                </ul>
                <ul>
                    <div className="padding-top20">
                        <h4>ประสบการณ์การทำงาน</h4>
                        <div className="padding-top20" >
                            <h5>พนักงาน Onsite service เครื่องรูดบัตรเครดิตการ์ด(EDC) <br/>บริษัท : E-MERCHANT 
                            ปี พ.ศ. 2565-2567 </h5>
                            <p>ประสานงานกับร้านค้าเพื่อเข้าดำเนินการ, ติดตั้ง และ แก้ไขปัญหาที่เกี่ยวกับเครื่องรูดบัตร , และสอนใช้งานเครื่อง ตามที่ได้รับมอบหมาย</p>
                        </div>

                        <div className="padding-top20" >
                            <h5>พนักงาน ช่างอิเล็กทรอนิกส์<br/>บริษัท : TPG CONTROL AND AUTOMATION </h5>
                            <p>ทำหน้าที่ วาดลายวงจร electronic ลงแผง PCB ลงอุปกรณ์เดินสายไฟฟ้าตู้คอนโทรล ตามแบ่บที่มีมาให้เชื่อมเหล็กโครงสร้างเครื่องจักรขนาดเล็ก</p>
                        </div>
                        <div className="padding-top20" >
                            <h5>พนักงาน ซ่อมมือถือ <br/>ศูนย์บริการซัมซุง(SAMSUNG)</h5>
                            <p>ทำหน้าที่บริการ ซ่อม เปลี่ยนชิ้นส่วนมือถือซัมซุง และอัพเดทซอฟแวร์</p>
                        </div>
                        
                    </div>
                </ul>
            </div>
            <div className="container">
            <div>
                <Carousel>
                    <div>
                        <img src="/img/IMG_3285.jpg" className="img-thumbnail" alt=" " width="500"/>
                    </div>
                    <div>
                        <img src="/img/IMG_3286.jpg" className="img-thumbnail" alt=" " width="500"/>
                    </div>
                </Carousel>
            </div>
                
            </div>
        </section>
        
    );
}
export default Home