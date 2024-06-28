import React, { memo, useEffect, useState } from "react";
import "./single.scss";
import { Link, useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import star from "../../assets/images/star.svg";
import halfStar from "../../assets/images/halfStar.svg";
import starRegular from "../../assets/images/starRegular.svg";
import Products from "../../components/products/Products";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Single = () => {
  const { productId } = useParams();
  let { data, isFetching, isLoading } = useGetProductByIdQuery(productId);
  let { data: productsData } = useGetProductsQuery();
  let [tab, setTab] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const getRating = (rating) => {
    let res = [];
    for (let i = 0; i < Math.trunc(rating); i++) {
      res.push(<img className="star" src={star} alt="" />);
    }
    if (rating % 1 > 0.4) {
      res.push(<img className="star" src={halfStar} alt="" />);
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(<img className="star" src={starRegular} alt="" />);
    }
    return res;
  };

  console.log(productId);
  return (
    <>
      {isFetching || isLoading ? (
        <div className="single__loading container">
          <div className="single__loading__left bg__animation"></div>
          <div className="single__loading__right">
            <div className="single__loading__right__item bg__animation"></div>
            <div className="single__loading__right__item bg__animation"></div>
            <div className="single__loading__right__item bg__animation"></div>
          </div>
        </div>
      ) : (
        <div className="single__page container">
          <div className="single__page__header">
            <div className="single__page__header__left">
              <img src={data?.image} alt="" />
            </div>
            <div className="single__page__header__middle">
              <h2>{data?.title}</h2>
              <div className="single__page__header__middle__rating">
                <div className="stars">{getRating(data?.rating.rate)}</div>
                <p>0 reviews</p>
              </div>
              <div className="single__page__header__middle__price">
                <h2>${data?.price}</h2>
                <p>${parseInt(data?.price).toFixed(2) + 10}</p>
                <h3>24% Off</h3>
              </div>
              <div className="single__page__header__middle__info">
                <ul>
                  <p>Availability:</p>
                  <p>{data?.rating.count}</p>
                </ul>
                <ul>
                  <p>Category:</p>
                  <p>{data?.category}</p>
                </ul>
                <p>Free shipping</p>
              </div>
              <div className="single__page__header__middle__colors">
                <p>Select Color:</p>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="single__page__header__middle__size">
                <p>Size:</p>
                <select name="size" id="">
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </select>
              </div>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper single__page__header__right"
            >
              {productsData?.slice(0, 4).map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="mySwiper single__page__header__right__card">
                    <Link to={`/products/${product.id}`}>
                      <img
                        width={50}
                        className="image"
                        src={product.image}
                        alt=""
                      />
                    </Link>
                    <div className="mySwiper single__page__header__right__card__info">
                      <div className="rating">
                        {getRating(product.rating.rate)}
                      </div>
                      <div className="prices">
                        <h3>${product.price}</h3>
                        <h3>${product.price + 50}</h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="single__page__body">
            <div className="single__page__body__header">
              <ul>
                <li onClick={() => setTab(1)}>Product Information</li>
                <li onClick={() => setTab(2)}>Reviews</li>
                <li onClick={() => setTab(3)}>Another tab</li>
              </ul>
            </div>
            <div className="single__page__body__body">
              {tab === 1 ? (
                <div>
                  <ul>
                    <p>{data?.description}</p>
                  </ul>
                  <ul>
                    <p>
                      air max are always very comfortable fit, clean and just
                      perfect in every way. just the box was too small and
                      scrunched the sneakers up a little bit, not sure if the
                      box was always this small but the 90s are and will always
                      be one of my favorites.
                    </p>
                  </ul>
                  <ul>
                    <p>
                      air max are always very comfortable fit, clean and just
                      perfect in every way. just the box was too small and
                      scrunched the sneakers up a little bit, not sure if the
                      box was always this small but the 90s are and will always
                      be one of my favorites.
                    </p>
                  </ul>
                </div>
              ) : tab === 2 ? (
                <div>
                  <ul>
                    <p>
                      air max are always very comfortable fit, clean and just
                      perfect in every way. just the box was too small and
                      scrunched the sneakers up a little bit, not sure if the
                      box was always this small but the 90s are and will always
                      be one of my favorites.
                    </p>
                  </ul>
                  <ul>
                    <p>
                      air max are always very comfortable fit, clean and just
                      perfect in every way. just the box was too small and
                      scrunched the sneakers up a little bit, not sure if the
                      box was always this small but the 90s are and will always
                      be one of my favorites.
                    </p>
                  </ul>
                  <ul>
                    <p>{data?.description}</p>
                  </ul>
                </div>
              ) : (
                <div>
                  <ul>
                    <p>
                      air max are always very comfortable fit, clean and just
                      perfect in every way. just the box was too small and
                      scrunched the sneakers up a little bit, not sure if the
                      box was always this small but the 90s are and will always
                      be one of my favorites.
                    </p>
                  </ul>
                  <ul>
                    <p>{data?.description}</p>
                  </ul>
                  <ul>
                    <p>
                      air max are always very comfortable fit, clean and just
                      perfect in every way. just the box was too small and
                      scrunched the sneakers up a little bit, not sure if the
                      box was always this small but the 90s are and will always
                      be one of my favorites.
                    </p>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div style={{ marginTop: "-200px" }}>
            <Products title={"RELATED PRODUCTS"} haveCategories={false} />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Single);
