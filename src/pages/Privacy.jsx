import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import VideoBackground from '../components/VideoBackground.jsx'
import HoloDecor from '../components/HoloDecor.jsx'

const LAST_UPDATED = '17 июля 2026 года'

export default function Privacy() {
  return (
    <main className="relative overflow-hidden">
      <VideoBackground />
      <HoloDecor variant="a" aura scanlines={false} particles={4} />

      <section className="relative pb-24 pt-36 sm:pt-40">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 font-mono text-[12px] text-white/50 transition hover:text-accent"
          >
            <ArrowLeft size={14} /> На главную
          </Link>

          <p className="mb-4 font-jakarta text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
            [ политика ]
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-4 text-[13px] text-white/40">
            Последнее обновление: {LAST_UPDATED}
          </p>

          <div className="prose-invert mt-12 space-y-10 text-[15px] leading-relaxed text-white/75">
            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                1. Общие положения
              </h2>
              <p>
                Настоящая Политика конфиденциальности (далее — «Политика»)
                действует в отношении всей информации, которую{' '}
                <b>Романович Артём</b> (далее — «Оператор») может получить о
                Пользователе во время использования сайта{' '}
                <a href="https://romanovich-prod.ru" className="text-accent underline">
                  romanovich-prod.ru
                </a>{' '}
                (далее — «Сайт»).
              </p>
              <p className="mt-3">
                Использование Сайта означает безоговорочное согласие
                Пользователя с настоящей Политикой и указанными в ней условиями
                обработки его персональной информации. В случае несогласия с
                этими условиями Пользователь должен воздержаться от
                использования Сайта.
              </p>
              <p className="mt-3">
                Политика составлена в соответствии с требованиями Федерального
                закона от 27.07.2006 № 152-ФЗ «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                2. Какие данные мы собираем
              </h2>
              <p>При заполнении формы заявки на Сайте Оператор получает:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Имя, которое Пользователь указал добровольно</li>
                <li>
                  Контактные данные (Telegram-ник, email или номер телефона —
                  на выбор Пользователя)
                </li>
                <li>Информацию о проекте (тип, описание, бюджет, сроки)</li>
                <li>
                  Технические данные: IP-адрес, дата и время отправки заявки
                </li>
              </ul>
              <p className="mt-3">
                Оператор не собирает специальные категории персональных данных
                (расовая принадлежность, политические взгляды, состояние
                здоровья и т. п.), а также биометрические данные.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                3. Цели обработки персональных данных
              </h2>
              <p>Оператор обрабатывает данные Пользователя, чтобы:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Связаться с Пользователем по указанному им каналу для
                  обсуждения проекта
                </li>
                <li>
                  Подготовить и направить коммерческое предложение или ответить
                  на вопросы
                </li>
                <li>
                  Улучшать работу Сайта и качество предоставляемых услуг
                </li>
                <li>
                  Исполнять требования законодательства РФ
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                4. Правовые основания обработки
              </h2>
              <p>
                Правовым основанием обработки персональных данных Пользователя
                является его согласие, которое Пользователь выражает, нажимая
                кнопку «Завершить» под формой заявки. Согласие является
                конкретным, информированным и сознательным.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                5. Порядок и сроки хранения
              </h2>
              <p>
                Персональные данные Пользователя хранятся не дольше, чем этого
                требуют цели их обработки, но не более трёх лет с момента
                получения. По истечении срока данные удаляются или
                обезличиваются. Данные хранятся в электронном виде на серверах
                Telegram Messenger LLP.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                6. Передача данных третьим лицам
              </h2>
              <p>
                Оператор не передаёт персональные данные Пользователя третьим
                лицам, за исключением случаев, когда:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Пользователь дал явное согласие на такую передачу</li>
                <li>
                  Передача требуется по законодательству РФ (запрос
                  уполномоченного государственного органа)
                </li>
                <li>
                  Данные передаются техническим подрядчикам, обеспечивающим
                  работу Сайта (Cloudflare, Telegram, GitHub — только в объёме,
                  необходимом для передачи заявки)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                7. Файлы cookie и подобные технологии
              </h2>
              <p>
                Сайт использует файлы cookie и локальное хранилище браузера
                (localStorage) для служебных целей: запоминания факта
                ознакомления с уведомлением о cookie. Сайт не использует
                маркетинговые или аналитические cookie сторонних сервисов.
              </p>
              <p className="mt-3">
                Пользователь может отключить cookie в настройках своего
                браузера, но это не повлияет на работу основных функций Сайта.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                8. Права Пользователя
              </h2>
              <p>Пользователь имеет право:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Получать информацию о том, какие его данные хранятся у
                  Оператора
                </li>
                <li>Требовать уточнения, блокирования или удаления данных</li>
                <li>Отозвать своё согласие на обработку в любой момент</li>
                <li>
                  Обжаловать действия Оператора в Роскомнадзоре или в судебном
                  порядке
                </li>
              </ul>
              <p className="mt-3">
                Для реализации указанных прав достаточно направить запрос по
                контактам, указанным в разделе 10.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                9. Меры защиты
              </h2>
              <p>
                Оператор принимает необходимые организационные и технические
                меры для защиты персональных данных от неправомерного или
                случайного доступа: соединение по HTTPS, ограничение доступа к
                данным, хранение авторизационных ключей в защищённом
                окружении.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                10. Изменения Политики
              </h2>
              <p>
                Оператор вправе вносить изменения в настоящую Политику. Новая
                редакция вступает в силу с момента её размещения на этой
                странице. Актуальная редакция всегда доступна по адресу{' '}
                <a href="https://romanovich-prod.ru/privacy" className="text-accent underline">
                  romanovich-prod.ru/privacy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">
                11. Контакты Оператора
              </h2>
              <p>
                По всем вопросам, связанным с обработкой персональных данных,
                можно обратиться:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className="text-white/45">Email:</span>{' '}
                  <a
                    href="mailto:papulovartem8@gmail.com"
                    className="text-accent underline"
                  >
                    papulovartem8@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-white/45">Telegram:</span>{' '}
                  <a
                    href="https://t.me/Rmnvchprod"
                    target="_blank"
                    rel="noopener"
                    className="text-accent underline"
                  >
                    @Rmnvchprod
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[13px] font-semibold text-white/80 transition hover:border-accent/50 hover:text-white"
            >
              <ArrowLeft size={15} /> На главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
