import {Product} from "./product"

export type filters = null | ((product : Product)  => boolean)