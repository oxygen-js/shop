import {Initialized} from "../../shared/models/initialized";
import {ProductDto} from "../models/product.dto";

export type ShopState = Initialized<ProductDto[]>
