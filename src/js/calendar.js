import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

const checkInEl = document.getElementById('checkIn')
const checkOutEl = document.getElementById('checkOut')

flatpickr('#dateRange', {
  mode: 'range',
  inline: true, // 🔥 КАЛЕНДАР ЗАВЖДИ ВИДИМИЙ
  showMonths: 2,
  minDate: 'today',
  appendTo: document.getElementById('calendar'),

  onChange: selectedDates => {
    if (selectedDates[0]) {
      checkInEl.textContent = selectedDates[0].toLocaleDateString('en-GB')
    }

    if (selectedDates[1]) {
      checkOutEl.textContent = selectedDates[1].toLocaleDateString('en-GB')
    }
  },
})

onChange: selectedDates => {
  if (selectedDates.length === 2) {
    const nights = (selectedDates[1] - selectedDates[0]) / (1000 * 60 * 60 * 24)

    console.log('Nights:', nights)
  }
}
