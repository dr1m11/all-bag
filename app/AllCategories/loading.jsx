'use client'
import styles from './AllCategories.module.scss'
import useResize from "../hooks/useResize";
import Filter from "./Filter";
import SingleProductSkeleton from "../components/SingleProduct/Skeleton/SingleProductSkeleton";

const AllCategoriesLoading = () => {
    const width = useResize()

    const bags = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]


    return (
        <div>

        </div>
    );
};

export default AllCategoriesLoading;