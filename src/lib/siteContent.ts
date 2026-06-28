export const siteContent = {
  meta: {
    title: 'ピアノ教室 | あなたのペースで確実に上達',
    description: '初心者から経験者まで、一人ひとりの目標に合わせた個別指導。型にはめない丁寧なレッスンで、音楽を楽しみながら技術が身につきます。無料体験レッスン受付中。',
  },
  
  header: {
    logo: 'ピアノ教室',
    nav: [
      { label: 'レッスン紹介', href: '#lessons' },
      { label: '講師紹介', href: '#instructor' },
      { label: '生徒の声', href: '#testimonials' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
    ctaButton: '無料体験予約',
  },

  hero: {
    badge: '♪ 無料体験レッスン受付中',
    headline: ['あなたのペースで、', '確実に上達できるピアノ教室'],
    subtext: '初心者から経験者まで、一人ひとりの目標に合わせた個別指導。型にはめない丁寧なレッスンで、音楽を楽しみながら技術が身につきます。',
    ctaButton: '無料体験レッスンを予約する',
    trustIndicators: [
      '✓ 初回レッスン無料',
      '✓ 柔軟なスケジュール対応',
    ],
    floatingCard: '20年以上の指導実績',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'ピアノレッスンの様子',
  },

  lessons: {
    title: 'レッスン紹介',
    subtitle: 'あなたに合ったコースが見つかります',
    courses: [
      {
        icon: 'Piano',
        title: '個人レッスン',
        description: '初心者から上級者まで、目標とレベルに応じたマンツーマン指導。一人ひとりのペースで確実にステップアップできます。',
        meta: '対象: 全レベル',
        featured: true,
      },
      {
        icon: 'Gift',
        title: '体験レッスン',
        description: '初回無料で教室の雰囲気と指導方針を体感。レッスン内容や講師との相性を確認できます。お気軽にお申し込みください。',
        badge: '初回無料',
      },
      {
        icon: 'Music',
        title: '子ども向けコース',
        description: '楽しく基礎を学び、音楽的感性を育てるカリキュラム。遊び心を大切にしながら、しっかりとした技術を身につけます。',
        meta: '対象: 4歳〜中学生',
      },
      {
        icon: 'RotateCcw',
        title: '大人の再開コース',
        description: 'ブランクがある方も安心して再スタート。昔弾いていた曲を思い出しながら、新しい曲にも挑戦できます。',
        meta: '対象: 経験者・再開者',
      },
    ],
  },

  instructor: {
    title: '講師プロフィール',
    name: '山田 花子',
    credentials: '音楽大学ピアノ科卒業・指導歴20年以上',
    image: 'https://pub-b10352cd30db47758f1614c0d15bce2c.r2.dev/media/line_Ub54a0bdcd397d2eeaa859e6c86593ffb/2026-06/2a46c1e6-4052-40a9-97d0-634a5da345bb.jpg',
    imageAlt: '講師のプロフィール写真',
    bio: [
      '幼少期よりクラシックピアノを学び、音楽大学ピアノ科を卒業後、20年以上にわたり個人レッスンを中心とした指導を続けてきました。',
      '「ピアノは人生を豊かにする素晴らしい友」という信念のもと、生徒一人ひとりの個性や目標を大切にした指導を心がけています。技術だけでなく、音楽を通じて表現する喜びを共有することを何よりも大切にしています。',
      '初心者の方には基礎から丁寧に、経験者の方にはさらなる表現力の向上をサポートします。お子様から大人の方まで、幅広い年齢層の生徒さんと日々向き合っています。',
    ],
    highlights: [
      {
        icon: 'Award',
        label: '音楽大学卒業',
      },
      {
        icon: 'Users',
        label: '指導実績200名以上',
      },
      {
        icon: 'Clock',
        label: '20年以上の指導経験',
      },
    ],
  },

  testimonials: {
    title: '生徒の声',
    subtitle: '実際に通われている生徒さんからの声をご紹介します',
    items: [
      {
        quote: '全くの初心者でしたが、先生の丁寧な指導のおかげで半年で好きな曲が弾けるようになりました。毎回のレッスンが楽しみです。',
        name: '佐藤 美咲さん',
        context: '社会人・レッスン歴6ヶ月',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      },
      {
        quote: '30年ぶりにピアノを再開しました。ブランクがあっても焦らず、自分のペースで進められるのが嬉しいです。昔弾いていた曲にまた挑戦できる喜びを感じています。',
        name: '田中 健一さん',
        context: '会社員・レッスン歴1年',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      },
      {
        quote: '娘が5歳から通っています。先生は子どもの気持ちを大切にしながら、楽しく学べる工夫をしてくださいます。音楽が大好きになりました。',
        name: '鈴木 由美さん',
        context: '生徒の保護者',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },

  contact: {
    title: 'お問い合わせ',
    subtitle: '無料体験レッスンのお申し込み、ご質問など、お気軽にお問い合わせください',
    form: {
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      phonePlaceholder: '電話番号（任意）',
      messagePlaceholder: 'お問い合わせ内容やご希望のレッスン日時をお聞かせください',
      submitButton: '送信する',
    },
    info: {
      title: '教室情報',
      items: [
        {
          icon: 'MapPin',
          label: '所在地',
          value: '東京都渋谷区〇〇 1-2-3',
        },
        {
          icon: 'Clock',
          label: 'レッスン時間',
          value: '月〜土 10:00〜20:00\n日曜・祝日定休',
        },
        {
          icon: 'Mail',
          label: 'メール',
          value: 'info@piano-lesson.example',
        },
        {
          icon: 'Phone',
          label: '電話',
          value: '03-1234-5678',
        },
      ],
    },
  },

  footer: {
    logo: 'ピアノ教室',
    description: '一人ひとりのペースを大切にした、心に響くピアノレッスン',
    sections: [
      {
        title: 'レッスン',
        links: [
          { label: '個人レッスン', href: '#lessons' },
          { label: '体験レッスン', href: '#lessons' },
          { label: '子ども向けコース', href: '#lessons' },
          { label: '大人の再開コース', href: '#lessons' },
        ],
      },
      {
        title: '教室について',
        links: [
          { label: '講師紹介', href: '#instructor' },
          { label: '生徒の声', href: '#testimonials' },
          { label: 'アクセス', href: '#contact' },
        ],
      },
    ],
    social: [
      { icon: 'Instagram', href: '#', label: 'Instagram' },
      { icon: 'Facebook', href: '#', label: 'Facebook' },
      { icon: 'Mail', href: '#contact', label: 'お問い合わせ' },
    ],
    copyright: '© 2024 ピアノ教室. All rights reserved.',
  },
} as const;

export type SiteContent = typeof siteContent;
