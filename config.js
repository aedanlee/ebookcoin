module.exports = {
  "port": 7000,
  "address": "0.0.0.0",
  "serveHttpAPI": true,
  "serveHttpWallet": true,
  "version": "0.1.3",
  "fileLogLevel": "info",
  "consoleLogLevel": "log",
  "sharePort": true,
  "cluster": true,
  "clusterInstances": 2, //启动进程数
  "disableLogs": false,
  "basePath": "/v1/api",
  "api": {
    "access": {
      "whiteList": []
    }
  },
  "peers": {
    "list": [],
    "blackList": [],
    "options": {
      "timeout": 4000
    }
  },
  "forging": {
    "secret": [
      "wKyoJM1vS4ucHmWvxDSdcpC23mJwqfg3G6MKZoXaFfcnWHTqo7",
      "2aTWYPpQidVunxTg3y8YESYps7za6f9d4wYn9Gy2GuGnE7JX7V",
      "65uZNjL36Bdg2tkJnueYkd2n6YPe76fpdeYtgu7fso1m385mwD",
      "A2ckn69hEfRFiQtFunVDQfedEQc4YPKZygQ1w8Zgn5Y1pjRhfo",
      "6VF1qivgRGYcmmjAniUhfStL5uyiUexwYA139kmmZzKbBQSMhq",
      "5WBPtW4kXymPtGVSAMShWcnnit7dmvygja5aH9k5N5pKvgYcoP",
      "RDhV6jSsthWoLQg3RxtnR7fau3fNEefJQ3DjM1k9GCjQ8U7nhv",
      "ohsjgn7R2caNTzNoZrTyFGDo1JxXuyEWK1BgWzm13TB4J67Qaj",
      "w5T39q7NJ9LvTMPMBsvN9mkpjz4WTrngTbVyQCpg4izj9YcYcS",
      "kMxfc9vF3Lbq3xwmdm3JPrWcnWPmn9T3TfKapQxxqugDTphFEc",
      "B9euqnDi5P4rgbXX33jBoXSRrRNNovZSpiJtaKajNH8mTW4WzJ",
      "gv1unR9yfsj6DcxEo72BU4PvJUpSgNyajaZu9YzF3Mpnwc5maQ",
      "8WoZ1DYt7SwgUWRAc7xcwMbscGPKxeAt43fCrEWqk3rjVym1kW",
      "esAm4VgvFwRfyQdvL7d1Rc8L4MXczMihpiiYcev1Vmox1FE2Sa",
      "oXrGik3ynCRKkMS2UgBXTJvN4S1YfL2WGwrzK4jMRx8RoinZDt",
      "2S7iFgP4tdTsg2GL6z2K2jnMqu67YYJijz7tMgbNi7bMvZwYu6",
      "1vmsveSy951Ffe34hGL3eWbsPE9P9dSKqFAyQMdtAGaSeYbyiS",
      "4DF8s3Pe5x7K6UrZh93mLwXLBCeBAZAJQsKiVfBhhBKhewSsws",
      "4XouuQPgGC8i8vYvMVaQ8nfyhmco262naRxjfGXdbCyKaNKSZT",
      "vgE4xE9VCdaQGZcuSRFHQk38TQFJufV3DgnthE3eVVkjSa5Buw",
      "nQS55cz6FTfwdbXDeRBD3jkit6QZUxpEWN7nTwWkV2649mKuGq",
      "hTfbcfQ2FxVAsSZQBUmXAfaSgMYruCxaKb4KdRVE1bXdmyV7hq",
      "gevz7M21G5o5iwsGSfoiq2it1pRnEE5D8S9Gw1Hr3a6WJQppUq",
      "Bi8QaTfh1ooBPsQfPLVfVr8ft55pmPRUSN6Ar4jpTdah1D3xQ6",
      "7rfvH6GzXEyYKbiswwr91gF2bhjKNk7RuM83kY1YVLwDZFdVLG",
      "eagmBu4wqRgXerfBp4c8cQxNH1dLT9osjcV199T46z7hcArFDR",
      "y8sMU1yfnVirqm6h3n1HGeEnc7rXipejHNANBHw9mKLQKvKa1L",
      "PNHZrCCYwNYpE36V5dep73z4DoysBAeWfx1bhgvpFLis9Jtqo9",
      "ZNXt7RjZPY1nvYTNaW1GQXhL7p4DXNWLLMdGVS1AqeXAz7WGr6",
      "cjma422oSsahtbpQ698qREeixT7gLutkSEFp4Pe1baMSN5o6Kv",
      "2vn1HmiD5C9XzjE4DxphCgof6cVjEAy2meR4MuD97FcfsnjPGE",
      "5t3PyqCmDTEL426CRJfSeUfzZybKoqNHQeg55pdgRubqjN5ibz",
      "RERiL7o8WbegvUznES8ayX7m77r7mAixeX4L8YXe4nmSHDwgH6",
      "HRhJaqbHCfkYt364x2UyAfn4TBZdYBbWwVPQxfyHscU54j7dW8",
      "2yv676mdAT6NGVWoev2opR9k4KX8xN2nMr95vQGWbWhxztUddq",
      "LZDMC8YjErEczcfBYaAktRjwRTc3C1YR73NUyTxCJqdXkRfX4n",
      "SSq7fKgSoRabvAnU5BEZVew3oE2ZL58PZhi66YzSGa3TgdqS92",
      "RbE5B8N19oZGTNWED9zYiPUXkRE2ksoVBMFkYFxLHppXtZihF3",
      "j8eyrMu626qbn9pMYRnCHBpzjj43o2QGiVJ27sAEiTQiMkJ2DD",
      "fhLh6M3emYosfKTJiCpASxjdtiMXhJ2eiVdfhBvQbs8VuS1aVt",
      "6qGPk5sRPydB2RgDDoQonMBD9HP62fgvBxNHmC3G6pGUvFwaJ4",
      "o9gBHTpaWDQ7sDK6aY2Bfz3MH5Vj61Zm1KAFh97J6g1TM91hf8",
      "ReGCyrBB6gLKpMzyNS72pzrgjiAhkktxjbHPxPQTiXhxamq374",
      "zusPCn2BNwWX65a2PWqUPLzWjduPKUnrynzswPbvs2thSnwSvn",
      "K7gbiKJmib5ftxGMCGtQfVU25DRHLSNb1dnNEAcFm7um8WotY5",
      "uFbjAHczJPaFBXJcneQ7o632F2ZmXyuGTfYxjK4HzRd8oFpp7w",
      "g4Vfn2tvJ4VKSfPfHyqtE4PV2uQXSfrRU7mmXTcPbo5Z4h6KzS",
      "SsCMVuNzxG7sBU4CMwUPwVtC9Pe65K41jUgAsvLggAZMm91grp",
      "ungRnqNJ4eG5ZZt2BnyZ4iPz9N81kpckpJv7p153ToBhYpyLwM",
      "6wvHfKp2ddErfjiATxZHrq19bhDgm88k6EiMqJZ9RseGBV6UaK",
      "DyvaXM8iPi4Y5EthR1usicTR4QD6BxiG9owKJGMWvJiEjZL8R6",
      "ZfzjBDFNVd4MQxQx9Vk65JeRty7bj5n4AfhWjGHnPi7rBdgP9i",
      "f1e1e6sDDA73bXzZGQs3skpML8ocyU5FuNnj5TwHnK29tDZZr8",
      "ew4neSr6bmDGFpJcEHtMieLjQ7uijm8m2ECtH8udfy1UeuiHw9",
      "nfQ32tkKb6i2rNPH5tJPxFki47eeMfkEGmp4WwNGTQ8U88VAwx",
      "FziEK5ixqvesUQCpNYBRQToA1HLMmexPP4s7WFEthitE2kczp7",
      "5PetCEJeKR1f92fEvH8LqeC9QoCzGqNUW4AA7DxpaHcw8ZQJue",
      "RgV2t5qm4A8g4AG8JkgHcHU7hfH92fmtoq9RTbvNcPkaF32pBc",
      "RAaQ1W8ZgvdxAvHayzaJmxFwbx92fPoYDDMfU2NpaSG92pdbYq",
      "5s8rEmQ5c8Ncx3ccwjFHmyXWyYg1VSN9oc4xdNYRHLCPKRZLzy",
      "dA6rafHm49NJpZ9k3b1zLbucXX7ejz739VwH4ebgb9Vohqpk8Y",
      "pDKUrT8w1ihuQQ6Z9vZVnquG94Vpu6NJ3e223b4DPeXvn7h4pY",
      "NmdzQPisBto2AkRefx1KN2VNWoLrpMHfrb3s28ovsoVhR3oys7",
      "pxtDKMX1xXiuKad5ggoybdJYwBk3UciJnKDadHktYAd5hryvWH",
      "DvQd2nMErWkwnjC6oPDCBcuiZikELcXERLTz5pXUtnceToGpuR",
      "Kk6RpHe4gtYvY1NrLuHRrd6PJ1rN2ut1bMUZq8YShP2dNGfX6q",
      "6EznkhEggeJon6HkrgsF9Jrc9X4cZheok1mw2bXp3ZEPzLMXct",
      "rFkXbVxkNssugneprmUc3R4837Q3tWUmM3WopoLmBeDFcjeizL",
      "vfzdhjv2oEqjMo35HEYURyxP37CbzZuVczfaLBvVPpf6QnaAhL",
      "Tsj3FM2aVm7ARMGTbrKNx4m6MPwpWq1uVYr1hs9odv9hYey8wC",
      "sw3WGrpjV1Q4LB9uLqoXcin4qmbRg6RWLdcu512ps4L9fHd9ee",
      "Unt6brarc5QK5URoVRM66Vp9bPAS8j6X3uZ7uVxRk52XeobjVm",
      "ZARVitpDtB9dAtpFh1vpNDKpvnMy6Lg1GwBD1Gp6NrZ1FkfNsB",
      "kgraz9DxoUG8ydq8koTstZMeBdkWxAti6TbwpwFP8kLUA1eHss",
      "Zf9YhNzniG95UkzDNzfy4jEDGi4QcCaLYdmV5CkLELb42J9kU1",
      "oiRpcHfS2ij3Dr1DwicKokbveh86goXxqbjtmGk7JkCuMoFZBy",
      "HpZaFy2wZU8g1FXVNmjhuJ6a2vWz63QCx3mMMaUuG2YErfsUHi",
      "QaDjRBchPLHZk4QLELYjTEqNk1MGb5AMYxW3hjamdm3WNg22T2",
      "AFS2fwVXnF7993YYWeLeEYjwdNpnmpbKBcDaB4q2m99u8ys1CA",
      "w3for2S6U9PHJdTrmoMh7CibTd5QFyonEeHwqdd2PyWxabVDg9",
      "RK5Z5ri6Sush1aKavcqXfTxCkMi2cgN234yw2iMMfaFZyYCKjK",
      "GfLpYaJKxeMXEVvBSnrpRF67VMAhELWna97SAD72t4i5vcmdc2",
      "k1faUMWpt9p9zcPBi1edpFjbE4gajzT6o8JefAYKv4kBnXFNdc",
      "jpkg5gPGHbAY3tuNFbyVz8z4QQ7R2M1RFrfjpsDpidnm5XF3kz",
      "z4NKe4g4D77FVnytp78p8jM8h6h67oRsJhrKpjLygPzxbJJti6",
      "iAp4wDtNNvoKBrByt1qWe94nqHhPyh91HYaohnWWMdiY2sB6G1",
      "CsL8HaE6y53YYgUnYrKtKCngThmb41PaDfjsE4sZkoLfg69gk4",
      "DE9z8cesmLxQs6L3HVjKPujr4c3Nk7UmqUfRV4Cu2qEqM6kWVP",
      "dc4wMgemX5q7c1JiKFaTgdB6z8njjbBx3JaTc2SKL48v6a9dWi",
      "98hNXgTnuL9798nNymPGVHSJe7EdSuEvcNzqnisHxDoJc1nTbe",
      "ikue1YJmySLDhNv15bPPAssKM6kZjDjM962scjoxxig2LMLkk6",
      "o1j1P9Sp5DPanm5gkJicxkCWYC8g1pZ4es9M7upEn9noNyhbbc",
      "ezaWbKbAEfk2eUNiibcUe3Dt3qoo4YS2PRvTo23noY6xh94L9g",
      "YcjDjw64uyNcEmMfDdtCZzo7gAfx5bwgwF2BpgLJTcBfpyCr1K",
      "tkmzwQ6QRCgG89Z44HLAJagzknEoNfa4UhiWwSoX2UFABxSbG5",
      "eMfiE8H9DRi9bZE4b3mrcfVaajchtUWcQ1eHJ4JzJVkhqKZsU7",
      "E7mkTzgf3Eozgz6S3dxfNMavEU6oxa5SfngufFY6WXzZzRcMFE",
      "uxAjemBCk9ebNcxmk1Ja9YBAFugWeKE9QpA9KMgoPu4mkKHsXE",
      "bYgNNF68Hmb1USeW2B523StkzfbazzpQ49WmNfmoW9mEr2MaD4",
      "Eta3SAounYFXxAeDcCmiQLKS1KKiuKxtD1xgEjE71FaVLxciSK",
      "saQMdycLQgnC7pSBbCCbHwzGNPHB3Fba9sG47oePFLHdfLaS31"
    ],
    "access": {
      "whiteList": [
        "127.0.0.1"
      ]
    }
  },
  "loading": {
    "verifyOnLoading": false,
    "loadPerIteration": 5000
  },
  "sia": {
    "peer": {
      "ip": "127.0.0.1",
      "port": 9980
    }
  },
  "ssl": {
    "enabled": false,
    "options": {
      "port": 443,
      "address": "0.0.0.0",
      "key": "./ssl/ebookcoin.key",
      "cert": "./ssl/ebookcoin.crt"
    }
  },
  "dapp": {
    "masterrequired": true,
    "masterpassword": "Hg9M6MehFdaR",
    "autoexec": []
  },
  "db": {
    "ssl": false,
    "path": "mongodb://localhost:27017/ebook",
    "sslCA_PATH": "", //sslCA 文件路径
    "dbOptions": {
      "db": {
        "native_parser": true
      },
      "server": {
        "poolSize": 100,
        "auto_reconnect": true,
        "socketOptions": {
          "connectTimeoutMS": 30000,
          "keepAlive": 1
        }
      },
      "replset": {
        "poolSize": 100,
        "socketOptions": {
          "connectTimeoutMS": 30000,
          "keepAlive": 1
        }
      }
    }
  },
  "messageBrokerOpts": {
    //  To use message broker server, uncomment this:
    "messageBrokerServer": {
      "url": 'http://localhost:7001',
    },
  },
}
