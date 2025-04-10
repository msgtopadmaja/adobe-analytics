export function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-4">
          Welcome to our premium eCommerce store, where quality meets convenience. We specialize in bringing you the finest selection of lifestyle products, from fashion accessories to cutting-edge electronics.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to provide an exceptional shopping experience with carefully curated products that enhance your daily life. We believe in quality, sustainability, and customer satisfaction.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Quality First - We never compromise on product quality</li>
          <li>Customer Focus - Your satisfaction is our top priority</li>
          <li>Transparency - Clear pricing and honest product descriptions</li>
          <li>Innovation - Constantly updating our collection with the latest trends</li>
        </ul>
      </div>
    </div>
  );
}