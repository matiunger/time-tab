setThemes()
function setThemes() {
    window.themes = {
        "default": {
            name: getText("tn_default"),
            userAvailable: true,
            thumbnail: "soft-sunrise",
            palette: undefined,
            logic: [
                {
                    start: "0",
                    end: "sunrise_hs - 1",
                    theme: [
                        { bgdImage: "nightsky", props: "lightColors" },
                        { bgdImage: "cosma", props: "lightColors" },
                        { bgdImage: "aureora", props: "lightColors" }]
                },
                {
                    start: "sunrise_hs - 1",
                    end: "sunrise_hs + 1",
                    theme: [
                        { bgdImage: "soft-sunrise", props: "lightColors" }
                    ]
                },
                {
                    start: "sunrise_hs + 1",
                    end: "sunset_hs - 1",
                    theme: [
                        { bgdImage: "beachtop", props: "lightColors" },
                        { bgdImage: "shaded-hills", props: "lightColors" },
                        { bgdImage: "pyrenees", props: "lightColors" },
                        { bgdImage: "marin", props: "lightColors" },
                        { bgdImage: "clouded-hills", props: "lightColors" }
                    ]
                },
                {
                    start: "sunset_hs - 1",
                    end: "sunset_hs + 1.5",
                    theme: [
                        { bgdImage: "soft-sunrise", props: "lightColors" },
                        { bgdImage: "shaded-hills", props: "lightColors" },
                        { bgdImage: "marin", props: "lightColors" }
                    ]
                },
                {
                    start: "sunset_hs + 1.5",
                    end: "23.99",
                    theme: [
                        { bgdImage: "nightsky", props: "lightColors" },
                        { bgdImage: "cosma", props: "lightColors" },
                        { bgdImage: "aureora", props: "lightColors" }
                    ]
                }
            ]
        },
        "beach": {
            name: getText("tn_beach"),
            userAvailable: true,
            thumbnail: "beachtop",
            palette: undefined,
            logic: [
                {
                    start: "0",
                    end: "sunrise_hs",
                    theme: [
                        { bgdImage: "nightsky", props: "lightColors" }]
                },
                {
                    start: "sunrise_hs",
                    end: "sunset_hs",
                    theme: [
                        { bgdImage: "beachtop", props: "lightColors" }
                    ]
                },
                {
                    start: "sunset_hs",
                    end: "23.99",
                    theme: [
                        { bgdImage: "nightsky", props: "lightColors" }
                    ]
                }
            ]
        },
        "mountain": {
            name: getText("tn_mountain"),
            userAvailable: true,
            thumbnail: "clouded-hills",
            palette: undefined,
            logic: [
                {
                    start: "0",
                    end: "sunrise_hs - 1",
                    theme: [
                        { bgdImage: "nightsky", props: "lightColors" },
                        { bgdImage: "cosma", props: "lightColors" },
                        { bgdImage: "aureora", props: "lightColors" }]
                },
                {
                    start: "sunrise_hs - 1",
                    end: "sunrise_hs + 1",
                    theme: [
                        { bgdImage: "soft-sunrise", props: "lightColors" },
                        { bgdImage: "marin", props: "lightColors" }
                    ]
                },
                {
                    start: "sunrise_hs + 1",
                    end: "sunset_hs - 1",
                    theme: [
                        { bgdImage: "shaded-hills", props: "lightColors" },
                        { bgdImage: "pyrenees", props: "lightColors" },
                        { bgdImage: "marin", props: "lightColors" },
                        { bgdImage: "clouded-hills", props: "lightColors" }
                    ]
                },
                {
                    start: "sunset_hs - 1",
                    end: "sunset_hs + 1.5",
                    theme: [
                        { bgdImage: "soft-sunrise", props: "lightColors" },
                        { bgdImage: "shaded-hills", props: "lightColors" },
                        { bgdImage: "marin", props: "lightColors" }
                    ]
                },
                {
                    start: "sunset_hs + 1.5",
                    end: "23.99",
                    theme: [
                        { bgdImage: "nightsky", props: "lightColors" },
                        { bgdImage: "cosma", props: "lightColors" },
                        { bgdImage: "aureora", props: "lightColors" }
                    ]
                }
            ]
        },
        "light": {
            name: getText("tn_light"),
            userAvailable: true,
            thumbnail: undefined,
            palette: ["#fafce0", "#edf0be", "#21a5b6a9", "#05668D"],
            logic: [
                {
                    start: "0",
                    end: "23.99",
                    theme: [{ bgdImage: undefined, props: "light" }]
                }
            ]
        },
        "dark": {
            name: getText("tn_dark"),
            userAvailable: true,
            thumbnail: undefined,
            palette: ["#202020", "#202020", "#2c2c2c", "#2c2c2c"],
            logic: [
                {
                    start: "0",
                    end: "23.99",
                    theme: [{ bgdImage: undefined, props: "dark" }]
                }
            ]
        }
    }
}


var background_images = {
    "soft-sunrise": {
        author: "No Name",
        url: "https://www.pexels.com/photo/nature-sky-sunset-the-mountains-66997/",
        uri: "img/backgrounds/sunsetrise/soft-sunrise.jpg",
        base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAIAAABKLomcAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABV1JREFUSMdtVl2OM8cRI1k9+tn9nM+xkwfDb0bykAvkBjlpzuUrBIm9u1rNdJF5GEm7NjwoQNWQNCyyq1lN/vNfEEGBBAEQfITuX+G23JPPTwIAuS2Q+2JP8gjDQYwENpKBEihIH3ifsfWA50dld5wPYDyq+YyKG6qNEAwixCB34AHdgSWAd36fsCWSAEJi55wbuxsgCXB/+U40Cfygq1vuB2MPLOPG+DfkPrD54E18Vvkjv4kE4kExTKLPUu91CDZMmAPLApJ6YBPSH5AmfycnfgN8l30HYJDwAxVJoMCBiCbIgWVAQvGT4PzYcvFTQ/E3W/g75vkEnM/C7kUgAQhY+58GDwMShvAg/RmYhO7sP7/9jySHjTZsOGgDhLFvO0ASCIPsTAaOC0q3uAFL4uPZgSOBzAdwAubR1Duz2SDQQBrELUTkLlBCEhbggfMCCaNYooSipIN4IBeybq3DSCEDGEgSoIEZzMC2nWwzIUIEKYGA+VltBAhvlVID5wNLqqriIi3FIT2Jz+KJPACDEAAypAEDDXSwJdfg6mzGnJ7QZFqYVju248R369j1/zhgGXo6DOkwdBafxbN4Ep+kJ/EsHogDMYhxby0nHcxgM67Bu3G1tsI6cG1dnEvy7lw703bgxPb+caugA3t8e14O4tPQs/SN+EV4Es/CWTyKR2IRF3xgI7HTyWZcjauxmlu4o770Hn5zVmsFtmRztk633Z1mMAGMn061FI+jztJT8Yv4RTgTJ+EkHogjMJgCau+zEEkn7WzOaqzBFl4bl+nXrX/d8oJc4CtxdS7JxX5rX2evs9fZc7bb428nLMU9DqVz8UyexBNxUo7AEVjiSoRwPxZ3d2pjGlsyg9W4Fi7CK/NGX9DXzhvy2n6Z/dZ+d97i1/iCrMr4qeYoLZWqqsooLaWDeGts4AAcwBHLFkIiIXBrmjba6GQ6m7CK16F1y/vE+/Tr1r8ovxKX5rvx2nopvDTeG+NHrwMcqIKUKkioQhVV5LgFBqRwJ30zjb1tvLcOpjMbk+ihuXCbvs5+W/G18FJ43fq9c+m8Cr9uuSDj67yWNCK5qqSULLlkSZJYZEki6mYn93lA7mcshJ1GZjwTA61s8kE+jJySJ/vivtjvzCv9jL6kx7lnhQNVaUWyZLFFERTF3cdECpB4y/eBlIdxu+EJT2aXXW52s81Y9FAW+WAP9Eif3ONPvi7QIAusUKFMSCHNvQwBIsCkiEUYRJGF7H66e7iTacxgC9b2tXu0NXvXwTHo3QClLOXx3fq2FBdzlEqsoERGES21NaMJOkAgYEEO4qIMomIlSNLpzmbMcGI/1nhv1+ps8Ywd7H7b+7Z4PK8vh9KhuBRGcWj3bKKEyKTJBidkkID2dhNLEEAEbbunW6u5mQ0ZNNHwRBrVOBobuDnvM2OzpsfP/3k7Fp4HnwYW8VB8XvjloOMi6n73KIXKPqNKHOIojmIRFCC2tFLvc7zN9TJntybUGI1zY21cm6vZwWq8OK/O+PfPr4v4ZfDLgqN4Hvz+xB+e9NeTvl34tKiGatR50WkRxZTg2q0sGJEmsNuh7Q25Kpvg4TBMNI3pueGyYTVnuBlu8Pu//4NVo+pQLHERz4u+O/CHE3888y9HHIqj8OejvjuXxAmM4pGoQSxjY73PXK9zW73NrI339tphwMTTc3pOrzNvW956dxuunfHf//0CDdRIFShQlIZ4Hvxm8ElWLOE8dF6KgqESj8hgTG7Q6syZdjpscAbtAGGSfSjFsduZ93HpgMvXb0lZlVrAhzEI5P3iQKgwlv3Sn1owliKJ7NPde2Mjt18i6L5fASZ6wg0b2KdyIwH1f8hbRErjo/RxAAAAAElFTkSuQmCC"
    },
    "beachtop": {
        author: "Pixabay",
        url: "https://www.pexels.com/photo/climate-sea-landscape-nature-35626/",
        uri: "img/backgrounds/beach/beachtop.jpg",
        base64: "data:image/png;base64,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"
    },
    "shaded-hills": {
        author: "Pixabay",
        url: "https://www.pexels.com/photo/silhouette-of-trees-at-sunset-257092/",
        uri: "img/backgrounds/mountain/shaded-hills.jpg",
        base64: "data:image/png;base64,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"
    },
    "pyrenees": {
        author: "Brodie Vissers",
        url: "https://burst.shopify.com/photos/mountains-pyrenees",
        uri: "img/backgrounds/mountain/pyrenees.jpg",
        base64: "data:image/png;base64,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"
    },
    "marin": {
        author: "Marin Tulard",
        url: "https://unsplash.com/photos/qcHkNRi5yD0",
        uri: "img/backgrounds/mountain/marin.jpg",
        base64: "data:image/png;base64,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"
    },
    "nightsky": {
        author: "Juan",
        url: "https://www.pexels.com/photo/photography-of-night-sky-733475/",
        uri: "img/backgrounds/night/nightsky.jpg",
        base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAYCAIAAAAH5iiXAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABVZJREFUGBkFwc2OJVmxhNHPzD0iTv5Ui7rSff+3QmLCgAkCpEZUU1mZJ/Z2Yy3V9R0JACEhCxCggGwSJICAjORq3JlNHaqDWcxK0Mtv6ms+fnD/yixmK5PM9f7988c/M4sgkQyZ8vGKhIoysqqRcGNLQoUtlRBuJFy4kammWn1hg8SkWsAsSVJBZrak2YvZBAkCALTqQICQkSQjYxECQgAWE9kAIHdUqqYOVVOdXz9SJWnWjQq2JPVDmew7+waoYkAwC9RIyLiQJUcASJIlQwAIZRASMjISdapPzhdX7c//su9McBGAmS0JJBlCiSSGjDCmkbFVBzYghCR3MshIJGRkJ5KLTFSqQ8cjLh1X7l/Idb7MDAlFUkogyKhQMlsWEwIG0li45UoVARd2AmoCkqVJkATIgGQdjzpf00f6MT9/B80MMoIJruwtcJ/JzrpVIiMTkA9mNy5squQjCdVyIQMAqpmRAgKpKgEXxzXuqNQlmdffIESsO+spW3LWM0Q+cGc9yTBbdrLtbtyyQxC4VQc2MhIBWQUzSAC2MC5w+tT1kp//xu3rNXtnr3jTBxlm04cg60alPpkVIRX3V5RWNypcdZ4TYatOqjMBAUgAshIykdSPJD6OrC9cHNe48cH+qTqCSHTADLMpIIxCgMxQzezGjUvVg7HVJ3WgUhcyAJIrM8gQAsfpaqolkSRwviFlPQmqzlr0wb7ZS93Myt5KMYu9Jc/6bKpwYWPjioREFW5VS4ULIJEcJCKUOnxeAe6bRFX0xSzWnXWrOusJB3LmBrnPub9QwZ1suZtqXLjwQbVsfFBFHdRBHQmypEIlgoRKJC6V49LjnfNFdeR+opIP9i0fma0M+0kms4WYHZlZoFYf6jMENzZ9qc9g1ZE6qcaFCpeqE1GFBeXjmD9+5+Wd9UQO1vlgJvtmDoj2zWxWMYsMEjPIjLGa7lhy4cJNVSxcqaaKatWFGxcuV4+shLfvenl39fz4HRWSr8fYWTcWkcXcX8pQd/atWdjZt+wsAa2jY8ftOoLppk6541If+KQP6sRNnfQliYyOE4KKPlUJjluH1VfWVzKZkYtZmpP9ZH3FhVu1VJ4nzXXKhSpubOqQKi75UDfV8aHzwqf6xJdcmKw79w3m5VsmmsTWbBiqlCRbM2Szl3Llbq07+2Y9oyhpP05U2KiRosYlGTsGgQVgRfLRnG+R+rr2r1/5+MHzEwQhSYZsJmQ0GyKS9WQWNnVrP2MjQfrxekYOmjjUyMioAlhR5EQjoTLlaHw9RqXjyvEiN5lMSATJViZ7kSFJNi5maZqqLIvBRLvfH7XCRBvtMJnBkxUsWfLkFiU2muT2+YrV57mI3t6yF/dSAMgoQ7YSZpGQYRYZ5sn6Yj05KveHSv3ouXfuQTGIKESRUFbwFslYI2Ki0p0+sz7l8ePI7hw7ayAQEmWYDYcSsskoQy7mzPrKs+bLnN3vfT+T58yCFT3je7wj4uEZN3OLldzSVKX2kedNnV0tH1Pa945REBISZCDAOC1i5lB5nN3rM3et9bX773/+i6SXby+/fXtZ1MfSx41HoiaOKz60Lh2X59F6ffgnfV4vb9+utxV97twwktBhn3ZLk4RMwFi29CKfwObj7P9+9IfQ+f4NIBxXy6Xz1HEc1/VFqXomqOo6+zjqetT1eHl5u17f/u/7n/7/+5/W2h9fz6/n7M3a+5Bfr+vb2+vr68vQyAND39n3zz8+/v3PP/7193/87a//+dc/1v0luxFCSAEAJEBGAEi4ANsIyZJs9XGIJDM7mZm9Sar7elxv7+99Xve9Pj8/Z+211/PXx/31SYIgAP8DiiFlu26/q1gAAAAASUVORK5CYII="
    },
    "aureora": {
        author: "Pixabay",
        url: "https://www.pexels.com/photo/scenic-view-of-dramatic-sky-during-winter-258112/",
        uri: "img/backgrounds/night/aureora.jpg",
        base64: "data:image/png;base64,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"
    },
    "cosma": {
        author: "Stefan Cosma",
        url: "https://unsplash.com/photos/Su0PiGa4Gmo",
        uri: "img/backgrounds/night/cosma.jpg",
        base64: "'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAXCAIAAAD2sJpCAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABKJJREFUSMdtVj2PHNcRrKp+c0vxLImSYct2YMAOFPn/BwqUOXKgwDAMyRBISaalE3m8493e7s7Me10O3szufXDwFjsfmFfd1VXdw1KEflCMgZtzagAJCBJAApDAvgiw3wMAkiRs90svP9hwwnYbMe9y3LrOeHiU4xlV0HfoAGTfeIHsQUTYWJ8u2Ms/YBs2YBgwYXuakAkG2OA8wdplfV1oM2IAOhLIOEGSoNjzBrmkDjA6EhdsA3YmYJpOx0efGYAzt29zf/04Y0ZxJs+eczjzvGMUagPdB5YiEiyxaW7oMcELNzZAOPtiGE47wXSyB8EISs4laQZ5qvGR8vMXevaiA1MyBQUpqIBBxaIAYqm3O9G51NUJN8C03arblNevc9oxinNGW7BD4kNcgNLZOVSggIIqVIEKY+Bys0DDehJQWaUXPURCfSOQdCIGxQAk5nlR3wNxUXbCIAmSEVChwhTj7LgvGIwwBJIQaBhA2hYguLYZFB1wAwpiYB3r9i2yHVOk7wHb2QvmNjtn6DdkmIEYwFhTPBJeus+8AjPTzuqKGMAGGyi5vWhXP2A6dEn7Hq/lAc82ALfq+aDnQhRqgEpfVEQ5a5Q0mFxd3o2bSNuNDmQDZdt3P3u8QVYQHM5ge556MU92elTlrljGABZoQARVoCE1UGEFI3A0lROZkOFABtisxqw8/x2ffZr7K8Ce6+Jjuwf9AWAYMBAFKmBZUHv2UaBgFEbx0ka89KmWdIPoFDP6U+/fYR6RJuE0ehO0YT9RdY9qHpmV55+jbBSFZUAMLGcsAyNQCiK4LimKhiRAQmLvdxLhfPcqt1fIZAj2h1vmiWeFPv4tP/mCKmRC7OkyAqHOBLU0FsC2q5MsaJm7G8YzlMJkHq483nYVuOUjIK1FBb32eWRuLzFuOWzy7sLTHaIwglHWk0AES2GIIZZgKYjI8bZdfud5iyjG3K5etbsrd3/a8BPg3ty9Uu6003z+uee7+uZ7Hq47pKMwChSdZ4gIrU0mqPB40979VN98CybmXd695arUp4eWCbP64ujwdvGt91eotc3zIuzSV2EIER0SEZAsQfB452nytENO7fo1kH37D+FCOPHs41zm5hk//qy+eelWPb532zF69zguQuqtnyUYouR6QHNe/9p+/Q8354yN66K51Xgn4FXVfORjejqAgXny/tbjzfDHL6lAFEgIUaKWAdrFDMLby7y5QJ1B+eYXj1tkGiCJ9P3dH6p6Hekm0Cqy0blM+P3tYkERWtzSh/TRgB637fKV5xEAcrabp8mZIJ2GCD9I+QMuhkHF8Oe/oVsg7d1tTlsIjGCcCO+XDEGcX/6jXvzk2lxbXr/BPPWZSYBi7yGn75aFapt8EACdrhXzgV6/oVB5NuTuSucvEIUiI/L9z3z+CUjWcf7u77m/A0zRMIdCCS3djbR8LzyscUdl559LnJ4PRK5qdx5uFaqv/z386UttPsrLlxDGf3599oe/qgz1x29yOuT15almrXmuveWT5BNlR3Ti+ZhyGvcUQTu9f49pdKvli7/U1/9ql/+t//sebvHi9/tvvmqXv3R6SHqZ6l0gT/xkgPg/oTmopCrStzgAAAAASUVORK5CYII="
    },
    "clouded-hills": {
        author: "Dan Gold",
        url: "https://burst.shopify.com/photos/scenic-mountain-landscape?c=mountain",
        uri: "img/backgrounds/mountain/clouded-hills.jpg",
        base64: "data:image/png;base64,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"
    }
}

var themes_properties = {
    "light": {
        userAvailable: true,
        palette: ["#fafce0", "#edf0be", "#21a5b6a9", "#05668D"],
        image: "",
        properties: {
            "--background-image-small": "",
            "--background-image": "",
            "--color-background": "#fafce0",
            "--color-surface": "#edf0be",
            "--color-on-background": "#202020",
            "--color-on-background-shadow": "#ffffff83",
            "--font-main": "'Ubuntu', sans-serif",
            "--font-secondary": "'Open Sans', sans-serif",
            "--font-3": "'Comfortaa', cursive",
            "--color-dark": "#0280906b",
            "--color-light": "#21a5b69c",
            "--color-on-dark-light": "#ffffffb2",
            "--color-primary": "#05668D",
            "--color-secondary": "#21a5b6a9",
            "--color-tertiary": "#313131",
            "--color-tertiary-shadow": "#ffffff80",
            "--color-on-surface": "#2b2b2b",
            "--color-on-primary": "#1d1d1d",
            "--color-on-secondary": "#000000"
        }
    },
    "lightColors": {
        userAvailable: true,
        palette: [],
        image: "img/pexels-no-name-66997.jpg",
        properties: {
            //"--background-image-small": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAIAAABKLomcAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAABV1JREFUSMdtVl2OM8cRI1k9+tn9nM+xkwfDb0bykAvkBjlpzuUrBIm9u1rNdJF5GEm7NjwoQNWQNCyyq1lN/vNfEEGBBAEQfITuX+G23JPPTwIAuS2Q+2JP8gjDQYwENpKBEihIH3ifsfWA50dld5wPYDyq+YyKG6qNEAwixCB34AHdgSWAd36fsCWSAEJi55wbuxsgCXB/+U40Cfygq1vuB2MPLOPG+DfkPrD54E18Vvkjv4kE4kExTKLPUu91CDZMmAPLApJ6YBPSH5AmfycnfgN8l30HYJDwAxVJoMCBiCbIgWVAQvGT4PzYcvFTQ/E3W/g75vkEnM/C7kUgAQhY+58GDwMShvAg/RmYhO7sP7/9jySHjTZsOGgDhLFvO0ASCIPsTAaOC0q3uAFL4uPZgSOBzAdwAubR1Duz2SDQQBrELUTkLlBCEhbggfMCCaNYooSipIN4IBeybq3DSCEDGEgSoIEZzMC2nWwzIUIEKYGA+VltBAhvlVID5wNLqqriIi3FIT2Jz+KJPACDEAAypAEDDXSwJdfg6mzGnJ7QZFqYVju248R369j1/zhgGXo6DOkwdBafxbN4Ep+kJ/EsHogDMYhxby0nHcxgM67Bu3G1tsI6cG1dnEvy7lw703bgxPb+caugA3t8e14O4tPQs/SN+EV4Es/CWTyKR2IRF3xgI7HTyWZcjauxmlu4o770Hn5zVmsFtmRztk633Z1mMAGMn061FI+jztJT8Yv4RTgTJ+EkHogjMJgCau+zEEkn7WzOaqzBFl4bl+nXrX/d8oJc4CtxdS7JxX5rX2evs9fZc7bb428nLMU9DqVz8UyexBNxUo7AEVjiSoRwPxZ3d2pjGlsyg9W4Fi7CK/NGX9DXzhvy2n6Z/dZ+d97i1/iCrMr4qeYoLZWqqsooLaWDeGts4AAcwBHLFkIiIXBrmjba6GQ6m7CK16F1y/vE+/Tr1r8ovxKX5rvx2nopvDTeG+NHrwMcqIKUKkioQhVV5LgFBqRwJ30zjb1tvLcOpjMbk+ihuXCbvs5+W/G18FJ43fq9c+m8Cr9uuSDj67yWNCK5qqSULLlkSZJYZEki6mYn93lA7mcshJ1GZjwTA61s8kE+jJySJ/vivtjvzCv9jL6kx7lnhQNVaUWyZLFFERTF3cdECpB4y/eBlIdxu+EJT2aXXW52s81Y9FAW+WAP9Eif3ONPvi7QIAusUKFMSCHNvQwBIsCkiEUYRJGF7H66e7iTacxgC9b2tXu0NXvXwTHo3QClLOXx3fq2FBdzlEqsoERGES21NaMJOkAgYEEO4qIMomIlSNLpzmbMcGI/1nhv1+ps8Ywd7H7b+7Z4PK8vh9KhuBRGcWj3bKKEyKTJBidkkID2dhNLEEAEbbunW6u5mQ0ZNNHwRBrVOBobuDnvM2OzpsfP/3k7Fp4HnwYW8VB8XvjloOMi6n73KIXKPqNKHOIojmIRFCC2tFLvc7zN9TJntybUGI1zY21cm6vZwWq8OK/O+PfPr4v4ZfDLgqN4Hvz+xB+e9NeTvl34tKiGatR50WkRxZTg2q0sGJEmsNuh7Q25Kpvg4TBMNI3pueGyYTVnuBlu8Pu//4NVo+pQLHERz4u+O/CHE3888y9HHIqj8OejvjuXxAmM4pGoQSxjY73PXK9zW73NrI339tphwMTTc3pOrzNvW956dxuunfHf//0CDdRIFShQlIZ4Hvxm8ElWLOE8dF6KgqESj8hgTG7Q6syZdjpscAbtAGGSfSjFsduZ93HpgMvXb0lZlVrAhzEI5P3iQKgwlv3Sn1owliKJ7NPde2Mjt18i6L5fASZ6wg0b2KdyIwH1f8hbRErjo/RxAAAAAElFTkSuQmCC')",
            //"--background-image": "url('../img/pexels-no-name-66997.jpg')",
            "--color-background": "#3b1003",
            "--color-surface": "#ffffff28",
            "--color-on-background": "#ffffff",
            "--color-on-background-shadow": "#00000083",
            "--font-main": "'Ubuntu', sans-serif",
            "--font-secondary": "'Open Sans', sans-serif",
            "--font-3": "'Comfortaa', cursive",
            "--color-dark": "#ffffff33",
            "--color-light": "#ffffff42",
            "--color-on-dark-light": "#ffffffb2",
            "--color-primary": "#ff9900",
            "--color-secondary": "#ffffff86",
            "--color-tertiary": "#ffffff",
            "--color-tertiary-shadow": "#202020b6",
            "--color-on-surface": "#2b2b2b",
            "--color-on-primary": "#1d1d1d",
            "--color-on-secondary": "#242424"
        }
    },
    "dark": {
        userAvailable: true,
        palette: ["#202020", "#202020", "#2c2c2c", "#2c2c2c"],
        image: "",
        properties: {
            "--background-image-small": "",
            "--background-image": "",
            "--color-background": "#202020",
            "--color-surface": "#2c2c2c",
            "--color-on-background": "#bdbdbd",
            "--color-on-background-shadow": "#00000083",
            "--font-main": "'Ubuntu', sans-serif",
            "--font-secondary": "'Open Sans', sans-serif",
            "--font-3": "'Comfortaa', cursive",
            "--color-dark": "#028090be",
            "--color-light": "#21a4b6be",
            "--color-on-dark-light": "#ffffffb2",
            "--color-primary": "#028090",
            "--color-secondary": "#21a4b6be",
            "--color-tertiary": "#ffffff",
            "--color-tertiary-shadow": "#202020b6",
            "--color-on-surface": "#2b2b2b",
            "--color-on-primary": "#1d1d1d",
            "--color-on-secondary": "#e7e7e7"
        }
    }
}