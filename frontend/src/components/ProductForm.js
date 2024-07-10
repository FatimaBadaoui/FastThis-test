import { observer } from "mobx-react";
import {
  Card,
  Page,
  FormLayout,
  TextField,
  Button,
  InlineError,
  Banner,
  Layout,
} from "@shopify/polaris";
import { productStore } from "../stores/ProductStore.js";

const ProductForm = observer(() => {
  return (
    <Page title="Add Product to Store">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Title"
                value={productStore.title}
                onChange={(value) => productStore.setTitle(value)}
              />
              <TextField
                label="Price"
                type="number"
                prefix="€"
                value={productStore.price}
                onChange={(value) => productStore.setPrice(value)}
              />
              <TextField
                label="Stock Quantity"
                type="number"
                value={productStore.stockQuantity}
                onChange={(value) => productStore.setStockQuantity(value)}
              />
              <TextField
                label="Description"
                value={productStore.description}
                maxLength={200}
                showCharacterCount
                onChange={(value) => productStore.setDescription(value)}
              />
              <Button variant="primary" size="large" fullWidth onClick={() => productStore.submitForm()}>
                Add Product
              </Button>
            </FormLayout>
            {productStore.errorMsg && (
              <InlineError message={productStore.errorMsg} />
            )}
            {productStore.successMsg && (
              <Banner status="success">
                <p>{productStore.successMsg}</p>
              </Banner>
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
});

export default ProductForm;
