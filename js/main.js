const buyFormEl = document.getElementById('buy-form')
const buyBookButtonEl = document.getElementById('buy-the-book')
const closeBuyDialogButtonEl = document.getElementById('close-button')

buyBookButtonEl.addEventListener('click', () => {
  buyFormEl.classList.remove('hidden')
  buyFormEl.style.top = `${window.scrollY}px`
  document.body.style.paddingRight = '15px'
  document.body.style.height = '100vh'
  document.body.style.overflow = 'hidden'
})

closeBuyDialogButtonEl.addEventListener('click', () => {
  buyFormEl.classList.add('hidden')
  document.body.style.paddingRight = ''
  document.body.style.height = ''
  document.body.style.overflow = ''
})

const menuEl = document.getElementById('menu')
const menuButtonEl = document.getElementById('menu-button')

menuButtonEl.addEventListener('click', () => {
  menuEl.classList.toggle('hidden')
})

const promoPreviews = [
  {
    src: '../assets/img/top-previews/preview-1.jpg',
    title: 'wonderful mountain',
  },
  {
    src: '../assets/img/top-previews/preview-2.jpg',
    title: 'Mountain Vacations',
  },
  { src: '../assets/img/top-previews/preview-3.jpg', title: 'sea' },
]
const previewEl = document.getElementById('promo-preview')
const promoTitleEl = document.getElementById('promo-title')
const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')
let currentPreviewIndex = 0

function calibrateCurrentPreviewIndex(index, amountOfPreview) {
  if (index < 0) {
    return amountOfPreview - 1
  }
  if (index == amountOfPreview) {
    return 0
  }
  return index
}

function changePreview(index) {
  currentPreviewIndex = calibrateCurrentPreviewIndex(
    index,
    promoPreviews.length
  )
  previewEl.src = promoPreviews[currentPreviewIndex].src
  promoTitleEl.textContent = promoPreviews[currentPreviewIndex].title
}

previousButton.addEventListener('click', () => {
  changePreview(currentPreviewIndex - 1)
})

nextButton.addEventListener('click', () => {
  changePreview(currentPreviewIndex + 1)
})
