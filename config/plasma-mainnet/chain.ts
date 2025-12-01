import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0xcb2436774C3e191c85056d248EF4260ce5f27A9D'

// TODO: Update these with correct addresses for Plasma Chain
export const REFERENCE_TOKEN = '0x6100E367285b01F48D07953803A2d8dCA5D19873' // WETH or equivalent -> WXPL
export const STABLE_TOKEN_POOL = '0x8603C67B7Cc056ef6981a9C709854c53b699Fa66' // Pool between Reference Token and a Stablecoin (WXPL/USDT0)

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('20')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WXPL
  '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb', // USDT0
  // Add other whitelist tokens here (USDC, DAI, USDT, etc.)
]

export const STABLE_COINS: string[] = [
  // Add stablecoin addresses here
  '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb' // USDT0
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = [
  {
    address: Address.fromString(REFERENCE_TOKEN),
    symbol: 'WXPL',
    name: 'Wrapped XPL',
    decimals: BigInt.fromI32(18),
  },
]
