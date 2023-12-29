import { YTIcon, VKIcon, FBIcon } from "@/app/components/Icons";
import { H4, H5, H6, Paragraph } from "@/app/components/Typography";
import Link from "next/link";
function ContactSection() {
  return (
    <div>
      <H5 as="div">Контакты</H5>
      <ul className="mt-4">
        <FooterLink name="+375 29 667-23-80 " href="tel:+375296672380" />
        <FooterLink name="vgrean@gmail.com" href="mailto:vgrean@mail.ru" />
        <FooterLink name="Skype: valeri20770" href="skype:valeri20770?call" />
        <FooterLink
          name="г. Минск, ул. Сухая 7 каб. 6"
          href="https://www.google.com/maps/place/Doktor+Valeriy+Grin'/@53.9037683,27.5402026,15z/data=!4m6!3m5!1s0x46dbcf55a2f66adf:0x3869e6d6b86f511e!8m2!3d53.9037683!4d27.5402026!16s%2Fg%2F11g0vyyppl?entry=ttu"
        />
        <FooterLink name="15:00-20:00, Пн-Пн" href="" />
      </ul>
    </div>
  );
}

function SocialsSection() {
  return (
    <div>
      <H5 as="div">Социальные сети</H5>
      <div className="mt-4"></div>
      <div className="text-secondary mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/channel/UCg83jkm7aM3OKTAWMoSpf2A/"
            className="text-primary hover:text-team-current focus:text-team-current focus:outline-none"
          >
            <YTIcon size={48} />
          </a>
          <a
            href="https://www.facebook.com/doktorGrin/"
            className="text-primary hover:text-team-current focus:text-team-current focus:outline-none"
          >
            <FBIcon size={48} />
          </a>
          <a
            href="https://vk.com/vgrean123"
            className="text-primary hover:text-team-current focus:text-team-current focus:outline-none"
          >
            <VKIcon size={48} />
          </a>
        </div>
      </div>
    </div>
  );
}
function GeneralSection() {
  return (
    <div>
      <H5 as="div">Информация</H5>
      <ul className="mt-4">
        <FooterLink name="Вопросы и ответы" href="/q-and-a" />
        <FooterLink name="Правила и условия" href="/terms-and-conditions" />
        <FooterLink name="Договор оферты" href="/grean_offer.pdf" />
        <FooterLink name="Цены и оплата on-line" href="/prices-and-payment" />
        <FooterLink name="Пример верстки" href="/test" />
      </ul>
    </div>
  );
}

function SitemapSection() {
  return (
    <div>
      <H5 as="div">Карта сайта</H5>
      <ul className="mt-4">
        <FooterLink name="Главная" href="/" />
        <FooterLink name="Помощь" href="/psyhelp" />
        <FooterLink name="Направления" href="/therapy" />
        <FooterLink name="Обо мне" href="/about" />
        <FooterLink name="Блог" href="/blog" />
        <FooterLink name="Sitemap.xml" href="/sitemap.xml" />
      </ul>
    </div>
  );
}

function FooterLink({ name, href }: { name: string; href?: string }) {
  return (
    <li className="py-1">
      {href ? (
        <Link
          href={href}
          className="text-secondary underlined inline-block whitespace-nowrap text-lg hover:text-team-current focus:text-team-current focus:outline-none"
        >
          {name}
        </Link>
      ) : (
        <p className="text-secondary underlined inline-block whitespace-nowrap text-lg ">
          {name}
        </p>
      )}
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 pb-16 pt-40 lg:pt-48 dark:border-gray-600">
      <div className="relative mx-10vw">
        <div className="relative mx-auto grid max-w-7xl grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-6 lg:grid-cols-12 lg:gap-x-6">
          <div className="col-span-3  mt-20 md:mt-0">
            <ContactSection />
          </div>
          <div className="col-span-3 mt-20 md:mt-0 ">
            <GeneralSection />
          </div>
          <div className="col-span-3 mt-20 md:mt-0 ">
            <SitemapSection />
          </div>
          <div className="col-span-3 mt-20 md:mt-0 ">
            <SocialsSection />
          </div>
          <div className="col-span-full mt-24 text-lg text-gray-600 md:mt-44 dark:text-slate-500">
            <div>{`Copyright © ${new Date().getFullYear()} `}</div>
            <div>
              Консультант в области охраны психического здоровья ИП Гринь В.Г.
            </div>
            <div>УНП 192617833</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
