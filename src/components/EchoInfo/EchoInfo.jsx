import styles from './EchoInfo.module.css';

export function EchoInfo() {
  return (
    <section className={styles.container}>
      {/* Casas */}
      <div className={styles.section + ' ' + styles.homes}>
        <h2 className={styles.title}><span>{'//'}</span> Para Casas</h2>
        <p className={styles.text}>
          O Echo oferece monitoramento de energia em tempo real, ajudando você
          a economizar na conta de luz e garantir mais conforto e praticidade
          para sua família.
        </p>
        <ul className={styles.list}>
          <li>Reduza até 30% na conta de luz.</li>
          <li>Alertas personalizados para maior economia.</li>
          <li>Facilidade de uso via aplicativo.</li>
        </ul>
        <a href='#video' className={styles.button}>Saiba Mais</a>
      </div>

      {/* Empresas */}
      <div className={styles.section + ' ' + styles.business}>
        <h2 className={styles.title}><span>{'//'}</span> Para Empresas</h2>
        <p className={styles.text}>
          O Echo ajuda sua empresa a economizar energia e gerenciar o consumo
          com relatórios detalhados, garantindo sustentabilidade e redução de
          custos.
        </p>
        <ul className={styles.list}>
          <li>Redução significativa de custos operacionais.</li>
          <li>Relatórios inteligentes e personalizáveis.</li>
          <li>Impacto sustentável que valoriza sua marca.</li>
        </ul>
        <a href='#video' className={styles.button}>Saiba mais</a>
      </div>
    </section>
  );
};


