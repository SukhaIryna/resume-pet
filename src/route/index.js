// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Oleksandria, Sobornaya sq, 10/112',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.co',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume - Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experiencey',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
        tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume - Skills',
    },

    header,
    main: {
      title: 'All skills',
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git & Terminal',
          point: 10,
        },
        {
          name: 'NPM',
          point: 10,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      title: 'My hobbies',
      hobbies: [
        {
          name: 'painting',
          isMain: true,
        },
        {
          name: 'nordic walk',
          isMain: true,
        },
        {
          name: 'crocheting',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

//                  ↑↑ сюди вводимо JSON дані
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume - Education',
    },

    header,

    main: {
      title: 'My education',
      education: [
        {
          name: 'IT-BRAINS',
          isEnd: false,
        },
        {
          name: 'Online universitet Lift',
          isEnd: false,
        },
        {
          name: 'Interregional Academy of Personnel Management',
          isEnd: true,
        },

        {
          name: 'Kyiv Technological Institute of Light Industry',
          isEnd: true,
        },
      ],

      title: 'My certificates',
      certificates: [
        {
          name: 'Diploma',
          id: 235871,
        },
        {
          name: 'Diplomas',
          id: 598762,
        },
        {
          name: 'Certificate',
          id: 89745,
        },
      ],
    },

    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume - Work',
    },

    header,

    main: {
      work: [
        {
          position: 'Junior Fullstak Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: '22.03.2023',
          },
        },
      ],
    },

    footer,
  })
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
