import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';

//배너이미지
import bikeImage from './img/bike.jpg';
import bikeImage1 from './img/bike1.jpg';
import bikeImage2 from './img/bike2.jpg';

//서울,지도 이미지
import mapImage from './img/map.jpg';
import seoulImage from './img/seoul.png'; 

//구성요소,대여소,advantages이미지
import feature1 from './img/feature1.jpg';
import feature2 from './img/feature2.jpg';
import feature3 from './img/feature3.jpg';
import feature4 from './img/feature4.jpg';
import feature5 from './img/feature5.jpg';

import advantages1 from './img/advantages1.jpg';
import advantages2 from './img/advantages2.jpg';
import advantages3 from './img/advantages3.jpg';
import advantages4 from './img/advantages4.jpg';




function MainPage() {

    const bikeImages = [bikeImage, bikeImage1, bikeImage2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex === bikeImages.length - 1 ? 0 : prevIndex + 1;
            console.log('Next Image Index:', newIndex); // 새 인덱스를 올바르게 로깅
            return newIndex; // 새 인덱스를 반환하여 상태를 업데이트
        });
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? bikeImages.length - 1 : prevIndex - 1;
            console.log('Previous Image Index:', newIndex); // 새 인덱스를 올바르게 로깅
            return newIndex; // 새 인덱스를 반환하여 상태를 업데이트
        });
    };



    return (
        <div className='page-container'>
            <div className='banner-container'>
                <button onClick={prevImage} className="banner-button left">&lt;</button>
                <img src={bikeImages[currentImageIndex]} alt={`Bike ${currentImageIndex}`} className="banner-image" />
                <button onClick={nextImage} className="banner-button right">&gt;</button>
            </div>


            <div className="seoul-section">
                <img src={seoulImage} alt="서울" className="seoul-image" />
                    <div className="map-section">
                        <img src={mapImage} alt="Map" className="map-image" />
                        <div className="map-text-and-button">
                            <p className="seoul-description">따릉이 대여소 찾기</p>
                            <Link to="/mapbox" className="seoul-button">찾기</Link>
                        </div>
                    </div>
            </div>

            <section className="rental-info-section">
            <h2 className="rental-info-header">대여소 안내</h2>
            <div className="rental-info-container">
                <div className="rental-info">
                    <img src={feature1} alt="대여소 안내" className="rental-info-img" />
                    <div className="rental-info-text"> 
                        <strong className="rental-info-subtitle">대여소란?</strong>
                            서울자전거를 대여하고 반납할 수 있는 무인 정류장 형태의 자전거 거치 시설입니다.</div>
                </div>
                <div className="rental-info">
                    <img src={feature2} alt="대여소의 위치" className="rental-info-img" />
                    <div className="rental-info-text">
                        <strong className="rental-info-subtitle">대여소 위치 </strong>
                            대여소는 지하철 출입구, 버스정류장, 주택단지, 관공서, 학교, 은행 등 접근이 편리한 주변 생활시설 및 통행장소를 중심으로 운영하고 있습니다.</div>
                </div>
                <div className="rental-info">
                    <img src={feature3} alt="이용 방법" className="rental-info-img" />
                    <div className="rental-info-text">
                        <strong className="rental-info-subtitle">이용방법</strong>
                            대여소가 설치된 곳이면 어디에서나 '따릉이 앱'을 통해 서울 자전거를 대여하고 반납할 수 있습니다.</div>
                </div>
            </div>
            </section>

            <section className="components-section">
            <h2 className="components-section-header">대여소 구성요소</h2>
            <div className="components-container">
                <div className="component-item">
                    <img src={feature4} alt="구성요소 1" className="components-image" />
                    <div className="components-text">
                    <strong className="rental-info-subtitle">거치대</strong>
                    거치대는 자전거를 안전하게 세워 보관하는 시설이며, 따릉이 고유 색상과 형태를 지녀 복잡한 서울 시내에서 쉽게 눈에 띄도록 제작되었습니다.</div>
                </div>
                <div className="component-item">
                    <img src={feature5} alt="구성요소 2" className="components-image" />
                    <div className="components-text">
                        <strong className="rental-info-subtitle">자전거</strong>
                        누구나 이용할 수 있는 자전거로, 내구성이 강한 소재와 고급기어를 사용하여 주행 안정성과 편의성을 최우선으로 제작하였습니다.</div>
                </div>
            </div>
            </section>

           <section className="advantages-section">
                    
                    <div className="advantages-info-container">
                        <div className="advantages-info">
                        <img src={advantages1} alt="" className="advantages-info-img" />
                            <div className="advantages-info-text">
                                <strong className="advantages-info-subtitle">하나로 편리하게</strong>
                                따릉이/씽씽 대여부터, 고속/시외버스 예매, 택시 호출, 경로검색 등을 모두 티머니GO 앱 하나로 이용할 수 있어 모두의 이동 생활을 더욱 편리하게 합니다.
                            </div>
                        </div>
                        <div className="advantages-info">
                        <img src={advantages2} alt="" className="advantages-info-img" />
                            <div className="advantages-info-text">
                                <strong className="advantages-info-subtitle">매일 더 스마트하게</strong>
                                목적지까지의 최적의 경로와 교통수단을 알려주는 티머니GO. 내 위치와 상황에 맞게 더 스마트한 이동생활을 경험해보세요
                            </div>
                        </div>
                        <div className="advantages-info">
                        <img src={advantages3} alt="" className="advantages-info-img" />
                            <div className="advantages-info-text">
                            <strong className="advantages-info-subtitle">쓸수록 절약되는</strong>
                            매일 마일리지 쌓고, 갈아탈 때마다 리워드도 받고, 마일리지로 결제하고, 쓸 때마다 절약되는 경제적인 앱 티머니GO입니다.
                            </div>
                        </div>
                        {/* <div className="advantages-info">
                        <img src={advantages4} alt="" className="advantages-info-img" />
                            <div className="advantages-info-text">
                            <strong className="advantages-info-subtitle">친환경</strong>
                            해당 지역의 주민 또는 방문객에게 자전거를 빌려주는 공공 자전거 대여 제도를 말합니다. 유럽에서 처음 시작되었으며 현재는 전 세계적으로 시행되고 있습니다
                            </div>
                        </div> */}
                    </div>
            </section>
        </div>
        
    );
}

export default MainPage;