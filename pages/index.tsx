import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>A1 Contracting Services</title>
        <meta
          name="description"
          content="Professional construction services for residential and commercial projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h1>A1 Contracting Services</h1>
            <p>Your trusted partner in construction and contracting services.</p>
          </div>
        </div>

        {/* Services Section */}
        <div className={styles.parallax}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Residential Construction</h3>
              <p>
                Building your dream home with precision, quality, and attention
                to detail.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Commercial Construction</h3>
              <p>
                Delivering scalable and efficient solutions for businesses and
                organizations.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Renovations & Remodeling</h3>
              <p>
                Transforming spaces to match your vision with innovative designs
                and craftsmanship.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Project Management</h3>
              <p>
                Expert oversight to ensure projects are completed on time and
                within budget.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className={styles.parallax2}>
          <div className={styles.about}>
            <h2>About Us</h2>
            <p>
              At A1 Contracting Services, we are committed to delivering
              exceptional results for all your construction needs. Our team of
              experts brings decades of experience to every project, ensuring
              top-notch quality and satisfaction.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 A1 Contracting Services. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
